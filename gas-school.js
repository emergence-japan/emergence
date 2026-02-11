/**
 * 【スクール申し込み専用・完成版】
 */

function doGet(e) {
  return ContentService.createTextOutput("スクール用GAS：正常に動作しています。");
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

    // AIスクール専用のスプレッドシートID
    var spreadsheetId = "1PRVejuFcuZB0sYGxj5Lr1XE8yzrbQtM2p6sA0ww9w04";
    var ss = SpreadsheetApp.openById(spreadsheetId);
    var sheet = ss.getSheetByName("スクール申込") || ss.getSheetByName("シート1") || ss.getSheets()[0];
    
    // 日本語変換マップ
    var occupationMap = { employee: '会社員', public: '公務員', executive: '経営者・役員', freelance: '自営業・フリーランス', homemaker: '主婦・主夫', student: '学生', other: 'その他' };
    var ageMap = { under20: '20代未満', '20s': '20代', '30s': '30代', '40s': '40代', '50s': '50代', '60s': '60代', '70s': '70代以上' };
    var aiLevelMap = { none: '全く使ったことがない', beginner: '触ったことはある', intermediate: '日常的に使っている', advanced: '業務でフル活用している' };
    var goalMap = { basic: '基本操作', efficiency: '実務効率化', prompt: 'プロンプト設計', app: 'アプリ開発', latest: '最新情報' };
    var sourceMap = { sns: 'SNS', referral: '紹介', seminar: 'セミナー', other: 'その他' };
    var paymentMap = { bank: '銀行振込', paypal: 'PayPal' };

    // 1. スプレッドシートに追記（最優先：データ損失を防ぐ）
    try {
      sheet.appendRow([
        new Date(),
        p.name,
        p.email,
        p.phone || '-',
        ageMap[p.ageRange] || p.ageRange || "",
        occupationMap[p.occupation] || p.occupation || "",
        aiLevelMap[p.aiLevel] || p.aiLevel || "",
        goalMap[p.goal] || p.goal || "",
        sourceMap[p.source] || p.source || "",
        paymentMap[p.paymentMethod] || p.paymentMethod || ""
      ]);
    } catch (e) {
      console.error("Spreadsheet Error: " + e.toString());
      // スプレッドシート失敗は重大なので、ここはエラーを投げてフロントに通知させる
      throw new Error("スプレッドシートへの記録に失敗しました: " + e.toString());
    }
    
    // 2. 管理者通知（失敗してもユーザーへの自動返信は試みる）
    try {
      var adminEmail = "info@emergence-japan.com";
      var adminSubject = "【スクール申込】" + p.name + "様よりお申し込み";
      var adminBody = "生成AIブートキャンプへのお申し込みがありました。\n\n" + JSON.stringify(p, null, 2);
      GmailApp.sendEmail(adminEmail, adminSubject, adminBody);
    } catch (e) {
      console.error("Admin Email Error: " + e.toString());
    }
    
    // 3. ユーザー宛・自動返信メール（失敗しても管理者にログは残っている）
    if (p.email) {
      try {
        var userSubject = "【生成AIブートキャンプ】参加お申し込みありがとうございます";
        var userBody = p.name + "さん" + `


生成ＡＩブートキャンプに
お申込みいただき
ありがとうございます


ご自分のペースで
学んでくださいね
  
学習コンテンツとしては
最短 3ヶ月でAI活用の
エキスパートレベルになれるものを
ご用意させていただきます


【重要】
入会費をペイパルまたは、銀行振込で
お願いいたします

-----------------------------------
【ペイパル決済】

https://www.paypal.com/ncp/payment/89ZQRL79Q95ZU

-----------------------------------
【銀行振込】

銀行: 住信SBIネット銀行
支店: 法人第一支店
口座: 普通 1291996
名義: EMERGENCE-JAPAN合同会社

振込金額: 11,000円（税込）  
振込手数料はご負担をお願いいたします
-----------------------------------



【ご入金確認後の流れ】


入金確認後、コミュニティへの
招待リンクをお送りします


コミュニティは世界で６億人が使っている
Discordで運営します


インストール方法や登録方法
使い方につきましては
ガイドをお送りしますので
苦手な方もご安心ください

また、パソコンにつきましては
WindowsでもMacでも問題ございません


まずは入金後、
コミュニティに参加することが
最初のステップになります


ご質問・ご不明な点は
このメールに返信して
お気軽にお尋ねください


一緒にAIを使いこなせる側に
チェンジしましょう！


※領収書は入金確認後に発行します
----------------------------------
生成AIブートキャンプ運営
エマージェンス・ジャパン合同会社
浜田陽介
----------------------------------`;

        GmailApp.sendEmail(p.email, userSubject, userBody);
      } catch (e) {
        console.error("User Email Error: " + e.toString());
      }
    }

    return ContentService.createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
