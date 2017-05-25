//Dependencies & Modules
var express = require('express');
var router = express.Router();

//# RPG API
router.get('/', function(req, res, next) {
  res.render('index', { title: 'RPG API!' });
});

module.exports = router;
