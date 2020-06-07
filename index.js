const { google } = require('googleapis');
const keys = require("./keys.json")
const ig = require('./instagram');
const client = new google.auth.JWT(
  keys.client_email,
  null,
  keys.private_key,
  ['https://www.googleapis.com/auth/spreadsheets']
);

client.authorize((err, tokens) => {
  if (err) {
    console.info(err);
    return;
  } else {
    gsrun(client)
    console.info("Connected to Google API..")
  }
})

let username;
let password;

async function gsrun(client) {
  const gsapi = google.sheets({
    version: 'v4',
    auth: client
  })

  const opt = {
    spreadsheetId: '1RjauMTNUaQgp09qgwwN_kijdJnuD9ieuI-IvpL831YE',
    range: 'Sheet1!A2:D'
  };

  let data = await gsapi.spreadsheets.values.get(opt);
  let dataArray = data.data.values;
  username = dataArray[0][0];
  password = dataArray[0][1];
  return username, password;
}

(async() => {
  await ig.initialize();
  await ig.login(username, password);
})();