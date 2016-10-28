const router = require('express').Router();
const mixcloud = require('../services/mixcloud');

router.get('/', mixcloud.login, (req, res) => {
  res.redirect(res.nextUrl);
});

module.exports = router;
