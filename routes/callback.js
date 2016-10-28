const router = require('express').Router();
const mixcloud = require('../services/mixcloud');
const fetch = require('node-fetch');

function checkAccessToken(req, res, next) {
  next();
}

function getToken(req, res, next) {
  fetch(res.nextUrl)
  .then(r => r.json())
  .then((result) => {
    res.accessToken = result;
    next();
  })
  .catch((err) => {
    res.error = err;
    next();
  });
}


router.get('/', mixcloud.accessToken, getToken, (req, res) => {
  // res.redirect(res.nextUrl);
  res.render('main', {
    token: res.accessToken.access_token,
  });
});

module.exports = router;
