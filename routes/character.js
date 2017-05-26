//Dependencies & Modules
var express = require('express');
var router = express.Router();
var database = require('./../database.js');

//## Character Services [/character/{userId}]
//### Get Available Characters [GET]
router.get('/:userId', function(request, response) {
  var userId = request.params.userId;
  var query = 'SELECT "character_id" FROM "playercharacter" WHERE "player_id" IN ({0});';
  query = query.replace('{0}', userId);

  try {
    database.query(query, function(result) {
      var responseJson = {
        "ids": []
      }
      for (var i = 0; i < result.length; i++) {
        responseJson.ids.push(result[i].character_id);
      }
      response.send(responseJson);
    });

  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
