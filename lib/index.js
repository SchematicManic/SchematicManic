const docRequest = async (req, res) => {
  console.log(req.body);
  let stuff = generateAPICall(req.body);

  res.status(200).json(stuff);
};

const generateAPICall = params => {
  //given parameters, generate json for Autodesk API call
  return params;
};


module.exports = {
  docRequest: docRequest
};