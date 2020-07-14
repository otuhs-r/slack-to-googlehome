require('dotenv').config();
const { GoogleSpreadsheet } = require('google-spreadsheet');

exports.write = async function (str) {
  const doc = new GoogleSpreadsheet(process.env.SPREADSHEET_KEY);

  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  });

  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[0];

  await sheet.loadCells('A1');
  const a1 = sheet.getCellByA1('A1');
  a1.value = str

  await sheet.saveUpdatedCells();
}
