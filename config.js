require('dotenv').config();

const AUTODESK_CLIENT_ID = process.env.AUTODESK_CLIENT_ID
const AUTODESK_CLIENT_SECRET = process.env.AUTODESK_CLIENT_SECRET

module.exports = {
  AUTODESK_CLIENT_ID,
  AUTODESK_CLIENT_SECRET
};