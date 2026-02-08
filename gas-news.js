/**
 * 【ニュース更新用】ニュース専用のスプレッドシートと連携するスクリプト
 * 
 * 1. ニュース専用のスプレッドシートを新規作成してください。
 * 2. シート名を「News」にし、1行目に [date, category, title, link] と入力してください。
 * 3. スプレッドシートのID（URLの /d/ と /edit の間の文字列）を下の spreadsheetId に貼り付けてください。
 * 4. 「デプロイ」>「新しいデプロイ」で「全員」に公開し、URLをNewsSection.tsxに設定してください。
 */

function doGet(e) {
  try {
    // ★ニュース専用のスプレッドシートIDをここに記入してください
    var spreadsheetId = "1aYcjnMuQvFm1IXEqXL2NqxX_XOiHZ_BmpQQy7uSZDYo"; 
    var ss = SpreadsheetApp.openById(spreadsheetId);
    var sheet = ss.getSheetByName("News") || ss.getSheets()[0];
    
    var data = sheet.getDataRange().getValues();
    var headers = data[0]; // date, category, title, link
    var jsonData = [];

    for (var i = 1; i < data.length; i++) {
      var row = data[i];
      var item = {};
      for (var j = 0; j < headers.length; j++) {
        var value = row[j];
        if (Object.prototype.toString.call(value) === "[object Date]") {
          value = Utilities.formatDate(value, "JST", "yyyy.MM.dd");
        }
        item[headers[j]] = value;
      }
      if (item.title) {
        jsonData.push(item);
      }
    }

    // 最新順にソート
    jsonData.sort(function(a, b) {
      var dateA = new Date(a.date.replace(/\./g, '-'));
      var dateB = new Date(b.date.replace(/\./g, '-'));
      return dateB - dateA;
    });

    return ContentService.createTextOutput(JSON.stringify(jsonData))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ "error": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doPost(e) {
  return ContentService.createTextOutput(JSON.stringify({ "result": "error", "message": "Post is not supported for news." }))
    .setMimeType(ContentService.MimeType.JSON);
}
