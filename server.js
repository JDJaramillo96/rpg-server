//Modules
var express = require('express');
var app = express();

//Properties
var port = 8080;

var valeVerga =[ {
    "userId": 1,
    "id": 2,
    "title": "mkon",
    "body": "mkon x2"
}]

//Server functions
app.get('/posts', function(req, res) {
  res.send(valeVerga)
})

app.post('/posts/1', function(req, res) {
  console.log('200!, post');
  res.send(valeVerga);
});

app.listen(port, function(){
  console.log('App start listen!');
});
