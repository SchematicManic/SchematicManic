const express = require('express');
const router = express.Router();
const lib = require('../lib');

const docRequest = async (req, res) => {
  // let call = lib.generateAPICall(req.body);


  res.download('./result')
  // res.status(200).download(file);
};

router.post('/', docRequest);
module.exports = router;