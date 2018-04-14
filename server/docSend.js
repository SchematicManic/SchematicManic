const express = require('express');
const router = express.Router();
const lib = require('../lib');

const docSend = function (req, res) {
  console.log('routed');
  let body = '';
  // Get the data as utf8 strings.
  // If an encoding is not set, Buffer objects will be received.
  req.setEncoding('utf8');

  // Readable streams emit 'data' events once a listener is added
  req.on('data', (chunk) => {
    console.log('Got data');
    body += chunk;
  });

  req.on('end', () => {
    console.log('Req ends. ', body);
    try {
      const data = JSON.parse(body);
      console.log('Chunked data: ', data);
      // write back something interesting to the user:
      // res.write(typeof data);
      res.end();
    } catch (er) {
      // uh oh! bad json!
      res.statusCode = 400;
      return res.end(`error: ${er.message}`);
    }
  });

};

router.post('/', docSend);
router.put('/', docSend);
module.exports = router;