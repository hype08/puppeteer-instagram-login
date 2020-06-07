const puppeteer = require('puppeteer');

const BASE_URL = "https://instagram.com/";

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