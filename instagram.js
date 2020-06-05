const puppeteer = require('puppeteer');
const fs = require('fs');

const BASE_URL = 'https://instagram.com/';

const instagram = {
  browser: null,
  page: null,

initialize: async () => {
  instagram.browser = await puppeteer.launch({
    headless: false
  });
  instagram.page = await instagram.browser.newPage();
},
  
start: async () => {
  await instagram.page.goto(BASE_URL, { waitUntil: 'networkidle2' });
  const session = require('./sessionStore');
    await instagram.page.setCookie({
          "domain": ".instagram.com",
          "expirationDate": 1622766828.716902,
          "hostOnly": false,
          "httpOnly": false,
          "name": "csrftoken",
          "path": "/",
          "sameSite": "unspecified",
          "secure": true,
          "session": false,
          "storeId": "0",
          "value": "BafbZkQgp8GMV5wxj6OinCNleKasvKMW",
          "id": 1
        },
        {
          "domain": ".instagram.com",
          "expirationDate": 1599093228.716956,
          "hostOnly": false,
          "httpOnly": false,
          "name": "ds_user_id",
          "path": "/",
          "sameSite": "unspecified",
          "secure": true,
          "session": false,
          "storeId": "0",
          "value": "36797412616",
          "id": 2
        },
        {
          "domain": ".instagram.com",
          "expirationDate": 1906615500.884262,
          "hostOnly": false,
          "httpOnly": true,
          "name": "ig_did",
          "path": "/",
          "sameSite": "unspecified",
          "secure": true,
          "session": false,
          "storeId": "0",
          "value": "478BA17B-463C-49A8-9EE3-64FCF5703FB2",
          "id": 3
        },
        {
          "domain": ".instagram.com",
          "expirationDate": 1906615500.884403,
          "hostOnly": false,
          "httpOnly": false,
          "name": "mid",
          "path": "/",
          "sameSite": "unspecified",
          "secure": true,
          "session": false,
          "storeId": "0",
          "value": "XtihzAAEAAGCHFNzjnzjJELvk1YM",
          "id": 4
        },
        {
          "domain": ".instagram.com",
          "expirationDate": 1622853226.539814,
          "hostOnly": false,
          "httpOnly": true,
          "name": "sessionid",
          "path": "/",
          "sameSite": "unspecified",
          "secure": true,
          "session": false,
          "storeId": "0",
          "value": "36797412616%3AgskGdnOAFiBNg7%3A14",
          "id": 5
        },
        {
          "domain": ".instagram.com",
          "expirationDate": 1591874678.541553,
          "hostOnly": false,
          "httpOnly": true,
          "name": "shbid",
          "path": "/",
          "sameSite": "unspecified",
          "secure": true,
          "session": false,
          "storeId": "0",
          "value": "4457",
          "id": 6
        },
        {
          "domain": ".instagram.com",
          "expirationDate": 1591874678.541595,
          "hostOnly": false,
          "httpOnly": true,
          "name": "shbts",
          "path": "/",
          "sameSite": "unspecified",
          "secure": true,
          "session": false,
          "storeId": "0",
          "value": "1591269878.4897907",
          "id": 7
        },
        {
          "domain": ".instagram.com",
          "hostOnly": false,
          "httpOnly": true,
          "name": "urlgen",
          "path": "/",
          "sameSite": "unspecified",
          "secure": true,
          "session": true,
          "storeId": "0",
          "value": "\"{\\\"114.156.13.224\\\": 4713\\054 \\\"219.121.3.183\\\": 4685}:1jh0Iu:fJqG89aBuind5XAcUtRYA-nUkbs\"",
          "id": 8
    })
  },

  test: async () => {
    await instagram.page.goto("http://instagram.com/tokyo.lunch", { waitUntil: 'networkidle2' });
  }
}

module.exports = instagram;