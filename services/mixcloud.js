const fetch = require('node-fetch');
require('dotenv').config();

const ID = process.env.MIXCLOUD_ID;
const SECRET = process.env.MIXCLOUD_SECRET;
const LOGIN_URL = 'https://www.mixcloud.com/oauth/authorize?';
const ACCESS_URL = 'https://www.mixcloud.com/oauth/access_token?';

function login(req, res, next) {
  res.nextUrl = (`${LOGIN_URL}client_id=${ID}&redirect_uri=http://localhost:3000/callback`);
  return next();
};

function accessToken(req, res, next) {
  res.nextUrl = `${ACCESS_URL}client_id=${ID}&redirect_uri=http://localhost:3000/callback&client_secret=${SECRET}&code=${req.query.code}`;
  return next();
};

module.exports = { login,
                  accessToken,
                };
