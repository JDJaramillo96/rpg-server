//Modules
var express = require('express');
var app = express();

//Properties
var port = 8080;

//Server functions
app.get('/Test', function(req, res) {
  res.send('200!, Get');
})

app.post('/Test', function(req, res) {
  res.send('200!');
});

app.listen(port, function(){
  console.log('App start listen!');
});
