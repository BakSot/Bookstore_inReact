var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('SEARCH FOR A BOOK');
});

module.exports = router;
