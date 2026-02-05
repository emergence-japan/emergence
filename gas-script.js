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
    
    // スプレッドシートにデータを追加
    // 列順: 日時, お名前, 会社名, メールアドレス, 電話番号, お問い合わせ内容
    sheet.appendRow([
      new Date(),
      params.name,
      params.company || '',
      params.email,
      params.phone || '',
      params.message
    ]);
    
    // 通知メールの送信（ご自身のメールアドレスに届きます）
    const myEmail = Session.getActiveUser().getEmail();
    const subject = "【Emergence-Japan】WEBサイトよりお問い合わせがありました";
    const body = `
以下の内容でお問い合わせがありました。

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
