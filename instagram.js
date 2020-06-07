const puppeteer = require('puppeteer');
const { google } = require('googleapis');
const keys = require("./keys.json")
const BASE_URL = "https://instagram.com/";

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
    console.info("Connected to Google API..")
  }

})

const instagram = {
  browser: null,
  page: null,

  initialize: async () => {
    instagram.browser = await puppeteer.launch({
      headless: false
    });
    instagram.page = await instagram.browser.newPage();

  },

  login: async (username, password) => {
    // navigate  to instagram main page.
    await instagram.page.goto(BASE_URL, { waitUntil: 'networkidle2' });


    // // wait for 1sec
    await instagram.page.waitFor(1000);

    // /* writing username and password */
    await instagram.page.type('input[name="username"]', username, { delay: 50 });
    

    await instagram.page.type('input[name="password"]', password, { delay: 50 });

    debugger;

    // // clicking on the login button 
    loginButton = await instagram.page.$x('//div[contains(text(),"Log In")]');

    await loginButton[0].click();

    await instagram.page.waitFor(10000);


    // // wait for logout button to appear
    // await instagram.page.waitFor('a > span[aria-label="Profile"]');

    debugger;
  }
}


module.exports = instagram;