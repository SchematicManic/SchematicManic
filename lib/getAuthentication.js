const axios = require('axios');

const token = null;

const getAuthentication = async () => {
  if (token === null) {
    //get new oauth token
    token = await callOAuth();
    //delete token in a little under 1 hour
    setTimeout(() => {
      token = null;
    }, 3500000);
  }
  return token;
};

const callOAuth = () => {
  //get a new OAuth token from autodesk
  return token;
};

module.exports = getAuthentication;