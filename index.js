const fs = require('fs');
const pify = require('pify');
const trash = require('trash');
const download = require('download');
const fsP = pify(fs);

const url = 'https://download-chromium.appspot.com/dl/Mac?type=snapshots';
const src = '/tmp/chrome-mac/Chromium.app';
const dest = '/Applications/Chromium.app';

module.exports = () => trash([src, dest])
  .then(() => download(url, '/tmp', { extract: true }))
  .then(() => fsP.rename(src, dest));
