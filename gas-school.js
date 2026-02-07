/**
 * 【スクール申し込み専用】Googleスプレッドシートの「拡張機能」 > 「Apps Script」に貼り付けて使用してください。
 */

function doPost(e) {
  try {
    const params = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // 選択肢の日本語変換マップ
    const occupationMap = { employee: '会社員', public: '公務員', executive: '経営者・役員', freelance: '自営業・フリーランス', homemaker: '主婦・主夫', student: '学生', other: 'その他' };
    const ageMap = { under20: '20代未満', '20s': '20代', '30s': '30代', '40s': '40代', '50s': '50代', '60s': '60代', '70s': '70代以上' };
    const aiLevelMap = { none: '全く使ったことがない', beginner: '触ったことはある', intermediate: '日常的に使っている', advanced: '業務でフル活用している' };
    const goalMap = { basic: '基本操作', efficiency: '実務効率化', prompt: 'プロンプト設計', app: 'アプリ開発', latest: '最新情報' };
    const sourceMap = { sns: 'SNS', referral: '紹介', seminar: 'セミナー', other: 'その他' };
    const paymentMap = { bank: '銀行振込', paypal: 'PayPal' };

    // スプレッドシートにデータを追加
    sheet.appendRow([
      new Date(),
      params.name,
      params.email,
      params.phone || '-',
      ageMap[params.ageRange] || params.ageRange,
      occupationMap[params.occupation] || params.occupation,
      aiLevelMap[params.aiLevel] || params.aiLevel,
      goalMap[params.goal] || params.goal,
      sourceMap[params.source] || params.source,
      paymentMap[params.paymentMethod] || params.paymentMethod
    ]);
    
    // 管理者通知
    const adminEmail = "info@emergence-japan.com";
    const adminSubject = "【スクール申込】" + params.name + "様よりお申し込み";
    const adminBody = "生成AIブートキャンプへのお申し込みがありました。\n\n■お名前: " + params.name + "\n■メール: " + params.email + "\n■支払い方法: " + (paymentMap[params.paymentMethod] || params.paymentMethod);
    GmailApp.sendEmail(adminEmail, adminSubject, adminBody);
    
    // 【ユーザー宛・自動返信メール】
    const userSubject = "【生成AIブートキャンプ】参加お申し込みありがとうございます";
    
    // 指示されたテンプレートを厳密に再現
    const userBody = params.name + "さん" + `


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

    GmailApp.sendEmail(params.email, userSubject, userBody);
    
    return ContentService.createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
