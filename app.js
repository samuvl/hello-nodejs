console.log("HELLO WORLD");

var express = require('express');
var app = express();
var router = express.Router();

app.get('/', function (req, res) {
  response = 'This is version 3 of the app.' + '\n';

  //send the response to the client
  res.send(response);

});

app.post('/', function(req, res) {

    res.send("{acepted:true}");
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});



module.exports = app;

