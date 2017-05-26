//Dependencies & Modules
var express = require('express');
var router = express.Router();
var database = require('./../database.js');

//## Team Services [/team/{userId}]
//### Get Team [GET]
router.get('/:playerId', function(request, response) {
  var playerId = request.params.playerId;
  var query = '';

  try {
    database.query(query, function(result){
      var responseJson = {

      }
      response.send(responseJson);
    })

  } catch (error) {
    console.error(error);
  }
});
