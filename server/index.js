const express = require('express');
const bodyParser = require('body-parser');
const { AUTODESK_CLIENT_ID, AUTODESK_CLIENT_SECRET } = require('./../config.js');
const lib = require('../lib');
const docRequest = require('./docRequest.js');
const docSend = require('./docSend');

const app = express();
const PORT = 3000;

app.use(express.static(__dirname + '/../client/dist'));

app.use('/docSend', docSend);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/docRequest', docRequest);

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
