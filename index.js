const ig = require('./instagram');

(async() => {
  await ig.initialize();
  await ig.start();
  await ig.test();

})();