const getAuthentication = require('./getAuthentication.js');

const generateAPICall = async (params) => {
  //first call token
  const token = await getAuthentication();
  console.log('token: ', token);
  //given parameters, generate json for Autodesk API call
  return params;
};

const getBlockRows = panelQty => {
  if (panelQty <= 10) { 
    return [panelQty]; 
  }
  else if (panelQty < 30) { 
    let rowOne = Math.floor(panelQty / 2);
    return [rowOne, panelQty - rowOne]; 
  }
  else { 
    let rowOne = Math.floor(panelQty / 3);
    let rowTwo = Math.floor((panelQty - rowOne) / 2);
    let rowThree = panelQty - rowOne - rowTwo;
    return [rowOne, rowTwo, rowThree];
  }
};

module.exports = generateAPICall;