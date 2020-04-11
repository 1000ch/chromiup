const {promisify} = require('util');
const trash = require('trash');
const download = require('download');
const rename = promisify(require('fs').rename);

const url = 'https://download-chromium.appspot.com/dl/Mac?type=snapshots';
const src = '/tmp/chrome-mac/Chromium.app';
const dest = '/Applications/Chromium.app';

module.exports = () => trash([src, dest])
  .then(() => download(url, '/tmp', { extract: true }))
  .then(() => rename(src, dest));
