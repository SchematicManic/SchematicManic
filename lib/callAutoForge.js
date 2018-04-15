const axios = require('axios');

const callAutoForge = async (token) => {
  const data = {
    "Arguments": {
      "InputArguments": [
        {
          "Resource": "http://download.autodesk.com/us/samplefiles/acad/blocks_and_tables_-_imperial.dwg",
          "Name": "HostDwg"
        }
      ],
      "OutputArguments": [
        {
          "Name": "Result",
          "HttpVerb": "POST",
          "Resource": "http://ec2-18-188-195-237.us-east-2.compute.amazonaws.com/docSend"
        }
      ]
    },
    "ActivityId": "PlotToPDF"
  }

  axios({
    method: 'post',
    url: 'https://developer.api.autodesk.com/autocad.io/us-east/v2/WorkItems',
    data: data,
    headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
  })
};

module.exports = callAutoForge;