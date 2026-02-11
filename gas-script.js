/**
 * 【お問い合わせフォーム専用・完成版（送信元：エマージェンス・ジャパン 浜田陽介）】
 */

function doGet(e) {
  return ContentService.createTextOutput("お問い合わせ用GAS：正常に動作しています。");
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var p = e.parameter;
    if ((!p || !p.name) && e.postData && e.postData.contents) {
      try { p = JSON.parse(e.postData.contents); } catch (err) {}
    }

    if (!p || !p.name) throw new Error("No data");

    // お問い合わせ用スプレッドシートID
    var spreadsheetId = "1nGE3VDFHq7VsUqPGQOspvX2IqE78MLAmAQXJVGKKwEQ"; 
    var ss = SpreadsheetApp.openById(spreadsheetId);
    var sheet = ss.getSheetByName("お問い合わせ") || ss.getSheetByName("シート1") || ss.getSheets()[0];

    // お問い合わせ種別の変換マップ
    var inquiryTypeMap = {
      'ai_solution': 'AIソリューション開発',
      'web_app': 'Web / アプリ開発',
      'dx_consulting': 'DXコンサルティング',
      'training': '社員研修',
      'publishing': '出版・執筆のご依頼',
      'other': 'その他'
    };
    var inquiryTypeText = inquiryTypeMap[p.inquiryType] || p.inquiryType || '不明';

    // 1. スプレッドシートに追記
    try {
      sheet.appendRow([
        new Date(),
        inquiryTypeText,
        p.name,
        p.company || "",
        p.email,
        p.phone || "",
        p.message
      ]);
    } catch (e) {
      console.error("Spreadsheet Error: " + e.toString());
      throw new Error("スプレッドシートへの記録に失敗しました。");
    }

    // 2. 管理者通知（差出人名：エマージェンス・ジャパン 浜田陽介）
    try {
      var adminEmail = "info@emergence-japan.com";
      var adminSubject = "【★重要：WEB問合せ】" + p.name + "様（" + inquiryTypeText + "）";
      var adminBody = "WEBサイトよりお問い合わせがありました。\n\n" +
                      "----------------------------------\n" +
                      "【種別】: " + inquiryTypeText + "\n" +
                      "【お名前】: " + p.name + "\n" +
                      "【会社名】: " + (p.company || "-") + "\n" +
                      "【メール】: " + p.email + "\n" +
                      "【電話】: " + (p.phone || "-") + "\n" +
                      "【内容】:\n" + p.message + "\n" +
                      "----------------------------------\n\n" +
                      "スプレッドシートを確認してください。";

      GmailApp.sendEmail(adminEmail, adminSubject, adminBody, {
        name: "エマージェンス・ジャパン 浜田陽介"
      });
    } catch (e) {
      console.error("Admin Email Error: " + e.toString());
    }

    // 3. ユーザーへの自動返信（差出人名：エマージェンス・ジャパン 浜田陽介）
    if (p.email) {
      try {
        var userSubject = "【Emergence-Japan】お問い合わせありがとうございます";
        var userBody = p.name + " 様\n\n" +
                       "この度は エマージェンス・ジャパン合同会社 へお問い合わせいただき、誠にありがとうございます。\n" +
                       "以下の内容で、お問い合わせを承りました。\n\n" +
                       "----------------------------------\n" +
                       "■お問い合わせ種別: " + inquiryTypeText + "\n" +
                       "■お名前: " + p.name + " 様\n" +
                       "■会社名: " + (p.company || "-") + "\n" +
                       "■メールアドレス: " + p.email + "\n" +
                       "■電話番号: " + (p.phone || "-") + "\n" +
                       "■お問い合わせ内容:\n" + p.message + "\n" +
                       "----------------------------------\n\n" +
                       "内容を確認の上、担当者より通常3営業日以内にご連絡を差し上げます。\n" +
                       "今しばらくお待ちいただけますと幸いです。\n\n" +
                       "今後ともよろしくお願い申し上げます。\n\n" +
                       "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n" +
                       "エマージェンス・ジャパン合同会社 (Emergence-Japan LLC)\n" +
                       "〒550-0014 大阪府大阪市西区北堀江4-4-6\n" +
                       "WEB: https://emergence-japan.com/\n" +
                       "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━";

        GmailApp.sendEmail(p.email, userSubject, userBody, {
          name: "エマージェンス・ジャパン 浜田陽介"
        });
      } catch (e) {
        console.error("User Email Error: " + e.toString());
      }
    }

    return ContentService.createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ result: 'error', error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
