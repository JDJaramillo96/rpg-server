//Dependencies & Modules
var express = require('express');
var router = express.Router();
var database = require('./../database.js');

//## Team Services [/team/{userId}]
//### Get Team [GET]
router.get('/:playerId', function(request, response) {
  var playerId = request.params.playerId;
  var query = 'SELECT "character_id_1", "character_id_2", "character_id_3" FROM "team" WHERE "player_id" IN ({0});';
  query = query.replace('{0}', playerId);

  try {
    database.query(query, function(result){
      var responseJson = {
        "character1": {"id": result[0].character_id_1},
        "character2": {"id": result[0].character_id_2},
        "character3": {"id": result[0].character_id_3},
      }
      response.send(responseJson);
    });

  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
