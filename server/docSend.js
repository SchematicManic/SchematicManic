const express = require('express');
const router = express.Router();
const lib = require('../lib');

const docSend = function (req, res) {
  console.log(req.method);
  console.log('Req received from Design Forge: ', req.body);
  res.sendStatus(201);
};

router.post('/', docSend);
router.put('/', docSend);
module.exports = router;