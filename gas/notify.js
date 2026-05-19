/**
 * ザ・トンボバンチ 予約通知 GAS スクリプト
 *
 * 設定手順:
 * 1. https://script.google.com で新規プロジェクト作成
 * 2. このコードを貼り付け
 * 3. LINE_CHANNEL_ACCESS_TOKEN と LINE_USER_ID を設定
 *    → 「プロジェクトの設定」→「スクリプトのプロパティ」で追加
 * 4. 「デプロイ」→「新しいデプロイ」→ 種類「ウェブアプリ」
 *    → 実行ユーザー「自分」、アクセス「全員」で公開
 * 5. 発行されたURLを .env.local の GAS_WEBHOOK_URL に設定
 */

// LINE Messaging API でボーカル個人に通知する場合
// （LINE公式アカウントのチャネルアクセストークンを使用）
const LINE_CHANNEL_ACCESS_TOKEN = PropertiesService.getScriptProperties().getProperty("LINE_CHANNEL_ACCESS_TOKEN");
const LINE_USER_ID = PropertiesService.getScriptProperties().getProperty("LINE_USER_ID"); // 通知先（ボーカル）のLINEユーザーID

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const { name, count, date, venue, submittedAt } = data;

    const message = [
      "🎸 新規予約が届きました！",
      "",
      `👤 名前: ${name}`,
      `🎫 枚数: ${count}枚`,
      `📅 日時: ${date}`,
      `📍 会場: ${venue}`,
      `🕐 受付時刻: ${submittedAt}`,
    ].join("\n");

    // LINEに通知
    sendLineMessage(message);

    // スプレッドシートに記録（任意）
    logToSheet(data);

    return ContentService
      .createTextOutput(JSON.stringify({ status: "ok" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function sendLineMessage(text) {
  if (!LINE_CHANNEL_ACCESS_TOKEN || !LINE_USER_ID) return;

  UrlFetchApp.fetch("https://api.line.me/v2/bot/message/push", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${LINE_CHANNEL_ACCESS_TOKEN}`,
    },
    payload: JSON.stringify({
      to: LINE_USER_ID,
      messages: [{ type: "text", text }],
    }),
  });
}

function logToSheet(data) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet()?.getActiveSheet();
  if (!sheet) return;

  // ヘッダーが未設定なら追加
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["受付時刻", "お名前", "枚数", "日時", "会場"]);
  }

  sheet.appendRow([
    data.submittedAt,
    data.name,
    data.count,
    data.date,
    data.venue,
  ]);
}

// CORSプリフライト対応
function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "ok" }))
    .setMimeType(ContentService.MimeType.JSON);
}
