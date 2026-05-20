/**
 * 【生成AIブートキャンプ：スクール管理システム・完全版】
 * フロー①：申し込み受付 ＋ サンクスメール
 * フロー②：入金確認後の行移動（別スプレッドシートへ）
 * フロー③：移動と同時にDiscord招待メール送信（###name1###対応）
 */

// --- 設定エリア ---
var SOURCE_SS_ID = "1PRVejuFcuZB0sYGxj5Lr1XE8yzrbQtM2p6sA0ww9w04"; // 申し込み受付
var DEST_SS_ID   = "13IPJ9HnKZnxhzNlt59QTeG2neZQN61ikLiBjHSQEBrM"; // 入金済み名簿
var ADMIN_EMAIL  = "info@emergence-japan.com";
var SENDER_NAME  = "生成AIブートキャンプ";

// ---------------------------------------------------------
// フロー①：WEBフォームからの申し込み処理
// ---------------------------------------------------------
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000); // 堅牢性：同時書き込みによるデータ破損を防止

  try {
    var p = e.parameter;
    if ((!p || !p.name) && e.postData && e.postData.contents) {
      try { p = JSON.parse(e.postData.contents); } catch(err) {}
    }
    if (!p || !p.name) throw new Error("データ不足");

    var ss = SpreadsheetApp.openById(SOURCE_SS_ID);
    var sheet = ss.getSheetByName("スクール申込") || ss.getSheets()[0];

    // 日本語変換マップ（堅牢性：マスターデータ化）
    var occupationMap = { employee: '会社員', public: '公務員', executive: '経営者・役員', freelance: '自営業・フリーランス', homemaker: '主婦・主夫', student: '学生', other: 'その他' };
    var paymentMap = { bank: '銀行振込', paypal: 'PayPal' };

    // シートに追記
    sheet.appendRow([
      new Date(),
      p.name,
      p.email || "",
      p.phone || "-",
      p.ageRange || "",
      occupationMap[p.occupation] || p.occupation || "",
      p.aiLevel || "",
      p.goal || "",
      p.source || "",
      paymentMap[p.paymentMethod] || p.paymentMethod || ""
    ]);

    // 管理者通知（musicboysから送信）
    GmailApp.sendEmail(ADMIN_EMAIL, "【★重要：スクール申込】" + p.name + "様", "詳細はシートを確認： https://docs.google.com/spreadsheets/d/" + SOURCE_SS_ID + "/", { name: SENDER_NAME });

    // 申込者へのサンクスメール（入金案内）
    if (p.email) {
      var paymentDetail = (p.paymentMethod === 'paypal')
        ? "【入会費】11,000円（税込）\n【ペイパル決済】\nhttps://www.paypal.com/ncp/payment/89ZQRL79Q95ZU"
        : "【入会費】11,000円（税込）\n【振込先】住信SBIネット銀行 法人第一支店 普通 1291996\n【名義】EMERGENCE-JAPAN合同会社";
      var userBody = p.name + "さん\n\n生成ＡＩブートキャンプにお申込みいただきありがとうございます。\n\n" + paymentDetail + "\n\n入金確認後、Discordコミュニティへの招待リンクをお送りします。";
      GmailApp.sendEmail(p.email, "【生成AIブートキャンプ】お申し込み受付完了", userBody, { name: SENDER_NAME });
    }

    return ContentService.createTextOutput(JSON.stringify({ status: "success" })).setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", error: err.toString() })).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

// ---------------------------------------------------------
// フロー②＆③：入金済み転送処理 ＋ Discord招待メール送信
// ---------------------------------------------------------

function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('運営メニュー')
      .addItem('入金済みユーザーを転送する', 'processTransfer')
      .addToUi();
}

function processTransfer() {
  var sourceSs = SpreadsheetApp.getActiveSpreadsheet();
  var sourceSheet = sourceSs.getSheetByName("スクール申込") || sourceSs.getSheets()[0];
  var data = sourceSheet.getDataRange().getValues();

  var destSs = SpreadsheetApp.openById(DEST_SS_ID);
  var destSheet = destSs.getSheets()[0];

  var count = 0;
  // 堅牢性：行削除の影響を防ぐため下からループ
  for (var i = data.length - 1; i >= 1; i--) {
    var isChecked = data[i][10]; // 11列目(K列)

    if (isChecked === true) {
      var name = data[i][1];
      var email = data[i][2];

      try {
        // ステップ②：転送
        destSheet.appendRow(data[i]);

        // ステップ③：Discord案内メール送信
        sendDiscordInvitation(name, email);

        // 元のシートから削除
        sourceSheet.deleteRow(i + 1);
        count++;
      } catch(e) {
        console.error("転送エラー: " + e.toString());
      }
    }
  }

  if (count > 0) {
    Browser.msgBox(count + "件の転送と招待メール送信が完了しました。");
  } else {
    Browser.msgBox("K列にチェックが入っている行がありません。");
  }
}

/**
 * Discord招待メール送信（###name1###置換対応）
 */
function sendDiscordInvitation(name, email) {
  var subject = "【生成AIブートキャンプ】コミュニティ招待（Discord）のご案内";

  var body = `###name1###さま


このたびは、生成AIブートキャンプへの
ご参加ありがとうございます。


ご入金が確認できましたので
コミュニティ参加用の
・Discord導入ガイドと
・招待リンクをお送りいたします。


【Discordとは】
Discord（ディスコード）とは
世界で約6億人が利用している
無料のオンラインコミュニケーションツールです。

安全性が高く
教育やビジネス、趣味のコミュニティまで
幅広く使われています。

生成ＡＩブートキャンプでは
安心して学習や交流を行うための
テキスト専用のやりとり環境として採用しています。



【推奨する利用方法】

生成ＡＩブートキャンプでは
Discordを以下のように使い分けることをおすすめします。


ブラウザ版Discord（パソコンで使用）
・学習教材の閲覧しながら生成AIを操作
・インストール不要で、インターネットブラウザからアクセス

スマホアプリ版Discord
・質問や雑談など簡単メッセージのやりとり
・アプリをApp StoreまたはGoogle Playからインストール

――――――――――――――――――――――――――
【ステップ1】Discordの登録
――――――――――――――――――――――――――

詳しい手順はこちらからご確認いただけます：

[Discord導入ガイド]

https://drive.google.com/file/d/1EaAp2b7puwQDO1oz0B6iQlMeurRHVNZi/view?usp=sharing


――――――――――――――――――――――――――
【ステップ2】登録完了後、招待リンクから参加
――――――――――――――――――――――――――
Discordの登録が完了しましたら
下記のリンクをクリックして
生成AIブートキャンプにご参加ください

【重要】[Discord招待リンク]


https://discord.gg/5V8dwAcW


※重要※
不正アクセスを防止するため
招待リンクには有効期限がありますので
お早めにご対応ください。


リンクが切れてしまった場合は
再発行いたしますので、
hamada@emergence-japan.com
または、このメールにご返信ください。

――――――――――――――――――――――――――
【ご注意】
――――――――――――――――――――――――――
・招待リンクは有効期限がありますので、お早めに
・登録後は「自己紹介」チャンネルにひとことご挨拶をお願いします。
・Discordの操作に不安がある方は、メールでお問合せください


それでは
コミュニティでお会いできるのを楽しみにしております。



生成AIブートキャンプ運営事務局
エマージェンス・ジャパン合同会社

浜田陽介`.replace("###name1###", name);

  GmailApp.sendEmail(email, subject, body, { name: SENDER_NAME });
}


function testEmail() {
  GmailApp.sendEmail("info@emergence-japan.com", "GAS認証テスト", "テスト送信です");
}
