const ora = require('ora');
const spinner = ora('Installing Chromium').start();
const chromiup = require('./');

chromiup()
  .then(() => spinner.succeed())
  .catch(error => spinner.fail());
