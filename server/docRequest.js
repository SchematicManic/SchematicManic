const express = require('express');
const router = express.Router();
const lib = require('../lib');

const docRequest = async (req, res) => {
  console.log(req.body);
  //generate API call (JSON object with appropriate auth and params)
  let call = lib.generateAPICall(req.body);
  //make API call, returns a file
  // let file = await lib.callAutoForge(call);
  //send back file as download
  res.status(200).json(req.body); //delete me
  // res.status(200).download(file);
};

router.post('/', docRequest);
module.exports = router;