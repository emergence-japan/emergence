/**
 * 【万能版・完成版】Googleスプレッドシートの「拡張機能」 > 「Apps Script」に貼り付けて使用してください。
 */

// 1. ブラウザでURLを開いたときに動く（疎通確認用）
function doGet(e) {
  return ContentService.createTextOutput("GASは正常に動作しています。このURLをVercelに設定してください。");
}

// 2. フォームから送信されたときに動く（本番用）
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000); // 同時書き込みを防ぐ

  try {
    // データの受け取り（URLエンコード形式とJSON形式の両方に対応）
    var p = e.parameter;
    
    // もしデータが空で、JSONとして送られてきた場合のバックアップ
    if ((!p || !p.name) && e.postData && e.postData.contents) {
      try {
        p = JSON.parse(e.postData.contents);
      } catch (err) {
        // パース失敗時はそのまま
      }
    }

    if (!p || !p.name) {
      throw new Error("届いたデータが空、または解析できませんでした。");
    }

    // ★重要：スプレッドシートのIDを直接指定する方式に変更
    var spreadsheetId = "1nGE3VDFHq7VsUqPGQOspvX2IqE78MLAmAQXJVGKKwEQ"; 
    var ss = SpreadsheetApp.openById(spreadsheetId);
    var sheet = ss.getSheetByName("お問い合わせ") || ss.getSheetByName("シート1") || ss.getSheets()[0];

    // お問い合わせ種別の変換
    var inquiryTypeMap = {
      'ai_solution': 'AIソリューション開発',
      'web_app': 'Web / アプリ開発',
      'dx_consulting': 'DXコンサルティング',
      'training': '社員研修',
      'publishing': '出版・執筆のご依頼',
      'other': 'その他'
    };
    var inquiryTypeText = inquiryTypeMap[p.inquiryType] || p.inquiryType || '不明';

    // 【修正：空行防止】insertRowBeforeを削除し、appendRowのみを使用
    sheet.appendRow([
      new Date(),     // A列：日時
      inquiryTypeText, // B列：種別
      p.name,         // C列：お名前
      p.company || "", // D列：会社名
      p.email,        // E列：メールアドレス
      p.phone || "",  // F列：電話番号
      p.message       // G列：内容
    ]);

    // 管理者への通知メール
    var adminEmail = "info@emergence-japan.com";
    var adminSubject = "【Emergence-Japan】WEBサイトよりお問い合わせがありました";
    var adminBody = "以下の内容でお問い合わせがありました。\n\n" +
                    "■お問い合わせ種別: " + inquiryTypeText + "\n" +
                    "■お名前: " + p.name + "\n" +
                    "■会社名: " + (p.company || "-") + "\n" +
                    "■メールアドレス: " + p.email + "\n" +
                    "■電話番号: " + (p.phone || "-") + "\n" +
                    "■お問い合わせ内容:\n" + p.message + "\n\n" +
                    "---\nこのメールはWEBサイトのシステムより自動送信されています。";
    GmailApp.sendEmail(adminEmail, adminSubject, adminBody);

    // ユーザーへの自動返信メール
    if (p.email) {
      var userSubject = "【Emergence-Japan】お問い合わせありがとうございます（自動返信）";
      var userBody = p.name + " 様\n\n" +
                     "この度は Emergence-Japan LLC へお問い合わせいただき、誠にありがとうございます。\n" +
                     "以下の内容で、お問い合わせを承りました。\n\n" +
                     "---\n" +
                     "■お問い合わせ種別: " + inquiryTypeText + "\n" +
                     "■お名前: " + p.name + " 様\n" +
                     "■会社名: " + (p.company || "-") + "\n" +
                     "■メールアドレス: " + p.email + "\n" +
                     "■電話番号: " + (p.phone || "-") + "\n" +
                     "■お問い合わせ内容:\n" + p.message + "\n" +
                     "---\n\n" +
                     "内容を確認の上、担当者より通常3営業日以内にご連絡を差し上げます。\n" +
                     "今しばらくお待ちいただけますと幸いです。\n\n" +
                     "万が一、数日経過しても返信がない場合は、お手数ですが再度ご連絡いただくか、\n" +
                     "本メールへの返信にてお知らせください。\n\n" +
                     "今後とも Emergence-Japan LLC をよろしくお願い申し上げます。\n\n" +
                     "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n" +
                     "Emergence-Japan LLC (エマージェンス・ジャパン合同会社)\n" +
                     "〒550-0014 大阪府大阪市西区北堀江4-4-6\n" +
                     "WEB: https://emergence-japan.com/\n" +
                     "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━";
      GmailApp.sendEmail(p.email, userSubject, userBody);
    }

    return ContentService.createTextOutput(JSON.stringify({ "result": "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    console.error('Error in doPost:', error);
    return ContentService.createTextOutput(JSON.stringify({ "result": "error", "error": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}