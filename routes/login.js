//Dependencies & Modules
var express = require('express');
var router = express.Router();
var database = require('./../database.js');

//## login Services [/login/{userName}]
//### Get User [GET]
router.get('/:userName', function(request, response) {
  var userName = request.params.userName;
  var query = 'SELECT "player_name" FROM "player" WHERE "player_name" IN (\'{0}\');';
  query = query.replace('{0}', userName);

  try {
    database.query(query, function(result) {
      response.send(JSON.stringify(result));
    });

  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
