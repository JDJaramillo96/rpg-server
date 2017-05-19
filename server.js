//Modules
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//Properties
var port = 8080;
var JSONTest = [{
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

//Server functions
app.get('/team', function(req, res) {
  console.log('GET!');
  res.send(JSONTest);
});
app.post('/team', function(req, res) {
  console.log('POST!');
  console.log(req.body);
  res.send('OK');
});

app.get('/yolo', function(req, res) {
  console.log('GET!, YOLO');
  res.send(yoloTest);
});
app.post('/yolo', function(req, res) {
  console.log('POST!, YOLO');
  console.log(req.body);
  res.send('OK');
});

app.listen(port, function() {
  console.log('App start listen!');
});
