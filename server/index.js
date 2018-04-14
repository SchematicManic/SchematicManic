const express = require('express');
const bodyParser = require('body-parser');
const { AUTODESK_CLIENT_ID, AUTODESK_CLIENT_SECRET } = require('./../config.js');
const lib = require('../lib');
const docRequest = require('./docRequest.js');
const docSend = require('./docSend');

const app = express();
const PORT = 3000;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

let body = '';
  // Get the data as utf8 strings.
  // If an encoding is not set, Buffer objects will be received.
  req.setEncoding('utf8');

  // Readable streams emit 'data' events once a listener is added
  req.on('data', (chunk) => {
    body += chunk;
  });

  req.on('end', () => {
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

app.use(express.static(__dirname + '/../client/dist'));

app.use('/docRequest', docRequest);

// app.use('/docSend', docSend);

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));