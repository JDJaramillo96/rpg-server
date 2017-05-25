//Dependencies & Modules
var express = require('express');
var router = express.Router();
var database = require('./../database.js');

//## login Services [/login/{userId}]
//### Get User [GET]
router.get('/:userId/', function(req, res) {
  var userId = req.params.userId;
  var query = '';
});

module.exports = router;
