const ig = require('./instagram');

(async() => {

  await ig.initialize();

  await ig.login("agilemedia_1", "Login2insta");


})();