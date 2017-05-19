//Modules
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var database = require('./database.js');

//Properties
var port = 8080;
var teamTest = [{
  "userId": 1,
  "id": 1,
  "title": "title test",
  "body": "body test"
}];

var yoloTest = [{
  "yolo1": "No es maiz",
  "yolo2": "No es yuca"
}];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//## Team services --------------------------------------------------
//### Team [GET]
app.get('/team', function(req, res) {
  console.log('GET!, TEAM');
  res.send(teamTest);
});
//### Team [POST]
app.post('/team', function(req, res) {
  console.log('POST!, TEAM');
  console.log(req.body);
  res.send('OK');
});

//## Yolo services --------------------------------------------------
//### Yolo [GET]
app.get('/yolo', function(req, res) {
  console.log('GET!, YOLO');
  res.send(yoloTest);
});
//### Yolo [POST]
app.post('/yolo', function(req, res) {
  console.log('POST!, YOLO');
  console.log(req.body);
  res.send('OK');
});

//## Player services --------------------------------------------------
//### Player [GET]
app.get('/player', function(req, res) {
  res.send('GET!, PLAYER');
});
//### Player [POST]
app.post('/player', function(req, res) {
  //Body elements
  var id = req.body.id;
  var name = req.body.name;
  //Query
  var query = "UPDATE player SET player_name = '{1}' WHERE player_id IN ({0})";
  query = query.replace('{0}', id);
  query = query.replace('{1}', name);

  try {
    database.query(query, function(result) {
      console.log('OK!');
    });
  } catch (error) {
    console.error(error);
  }

  res.send('OK!');
});

//Server listen
app.listen(port, function() {
  console.log('App start listen!');
});
