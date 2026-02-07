/**
 * 【重要】Googleスプレッドシートの「拡張機能」 > 「Apps Script」に貼り付けて使用してください。
 * 
 * 設定手順:
 * 1. スプレッドシートを作成
 * 2. 拡張機能 > Apps Script を開く
 * 3. このコードを貼り付けて保存
 * 4. 右上の「デプロイ」 > 「新しいデプロイ」をクリック
 * 5. 種類を「ウェブアプリ」に設定
 * 6. 「次のユーザーとして実行」を「自分」に設定
 * 7. 「アクセスできるユーザー」を「全員」に設定（重要）
 * 8. 発行されたURLを .env.local の NEXT_PUBLIC_CONTACT_FORM_ENDPOINT に設定
 */

function doPost(e) {
  try {
    const params = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // お問い合わせ種別を日本語に変換
    const inquiryTypeMap = {
      'ai_solution': 'AIソリューション開発',
      'web_app': 'Web / アプリ開発',
      'dx_consulting': 'DXコンサルティング',
      'training': '社員研修',
      'publishing': '出版・執筆のご依頼',
      'other': 'その他'
    };
    const inquiryTypeText = inquiryTypeMap[params.inquiryType] || params.inquiryType || '不明';

    // スプレッドシートにデータを追加
    // 列順: 日時, 種別, お名前, 会社名, メールアドレス, 電話番号, お問い合わせ内容
    sheet.appendRow([
      new Date(),
      inquiryTypeText,
      params.name,
      params.company || '',
      params.email,
      params.phone || '',
      params.message
    ]);
    
    // 通知メールの送信（指定のアドレスに届きます）
    const myEmail = "info@emergence-japan.com";
    const subject = "【Emergence-Japan】WEBサイトよりお問い合わせがありました";
    const body = `
以下の内容でお問い合わせがありました。

■お問い合わせ種別: ${inquiryTypeText}
■お名前: ${params.name}
■会社名: ${params.company || '-'}
■メールアドレス: ${params.email}
■電話番号: ${params.phone || '-'}
■お問い合わせ内容:
${params.message}

---
このメールはWEBサイトのシステムより自動送信されています。
`;
    GmailApp.sendEmail(myEmail, subject, body);
    
    // 【追加】お問い合わせいただいた方への自動返信メール
    const userSubject = "【Emergence-Japan】お問い合わせありがとうございます（自動返信）";
    const userBody = `${params.name} 様

この度は Emergence-Japan LLC へお問い合わせいただき、誠にありがとうございます。
以下の内容で、お問い合わせを承りました。

---
■お問い合わせ種別: ${inquiryTypeText}
■お名前: ${params.name}
■会社名: ${params.company || '-'}
■メールアドレス: ${params.email}
■電話番号: ${params.phone || '-'}
■お問い合わせ内容:
${params.message}
---

内容を確認の上、担当者より通常3営業日以内にご連絡を差し上げます。
今しばらくお待ちいただけますと幸いです。

万が一、数日経過しても返信がない場合は、お手数ですが再度ご連絡いただくか、
本メールへの返信にてお知らせください。

今後とも Emergence-Japan LLC をよろしくお願い申し上げます。

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Emergence-Japan LLC (エマージェンス・ジャパン合同会社)
〒550-0014 大阪府大阪市西区北堀江4-4-6
WEB: https://emergence-japan.com/
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;
    GmailApp.sendEmail(params.email, userSubject, userBody);
    
    // レスポンスを返す
    return ContentService.createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // エラー時のログ記録とレスポンス
    console.error('Error in doPost:', error);
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}