var express = require('express');
var controller = require('./controllers/controller');

var app = express();

app.get('/', controller.getIndex);

app.listen(1337, function() {
  console.log('Listening on port 1337');
});
