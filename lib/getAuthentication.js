const axios = require('axios');
const { AUTODESK_CLIENT_ID, AUTODESK_CLIENT_SECRET } = require('./../config.js');

let token = null;

const getAuthentication = async () => {
  if (token === null) {
    //get new oauth token
    token = await callOAuth();
    console.log('here: ', token);
    //delete token in a little under 1 hour
    setTimeout(() => {
      token = null;
    }, 3500000);
  }
  return token;
};

const callOAuth = () => {
  const data = `client_id=${AUTODESK_CLIENT_ID}&client_secret=${AUTODESK_CLIENT_SECRET}&grant_type=client_credentials&scope=data:read`;

  return axios({
    method: 'post',
    url: 'https://developer.api.autodesk.com/authentication/v1/authenticate',
    data: data,
    headers: {
        'Content-type': 'application/x-www-form-urlencoded'
    }
  })
    .then(res => res.data.access_token);

};

module.exports = getAuthentication;