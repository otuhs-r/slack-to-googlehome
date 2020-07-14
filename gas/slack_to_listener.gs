var spreadsheetId = PropertiesService.getScriptProperties().getProperty('SHEET_ID');

function doPost(e) {
  var sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName('endpoint');
  var endpoint = sheet.getRange('A1').getValue()

  UrlFetchApp.fetch(
    endpoint,
    {
      'method': 'POST',
      'contentType': 'application/x-www-form-urlencoded',
      'payload': { 'text' : e.parameter.text }
    }
  );
}
