const express = require('express');
const fs = require('fs');
const router = express.Router();
const lib = require('../lib');

const docSend = function (req, res) {
  const file = fs.createWriteStream(__dirname + '/result.pdf')
  req.pipe(file);
  file.on('close', () => {
    docReady = true;
  })
};

router.post('/', docSend);
router.put('/', docSend);
module.exports = router;