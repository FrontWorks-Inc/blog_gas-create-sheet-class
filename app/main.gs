function myFunction() {

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = new Sheet(ss.getSheetByName('シート1'), 2, 0);
  console.log(sheet.getDataRangeValues());  // すべてのシートの値
  console.log(sheet.getHeaderValues());  // ヘッダーの 2 行分の値
  console.log(sheet.getHeaders());  // ユニークなヘッダー行の値
  console.log(sheet.getDataValues());  // データ部分の値
  console.log(sheet.getAsObjects());  // レコードをオブジェクト化して取得する

}