const express = require('express');
const router = express.Router();
const lib = require('../lib');

const docSend = function (req, res) {
  console.log('Req received from Design Forge: ', req);
  res.sendStatus(201);
};

router.post('/', docSend);
module.exports = router;