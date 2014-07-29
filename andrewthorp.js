var path = require('path');
var jade = require('jade');
var express = require('express');
var app = express();

app.use('/css',express.static(path.join(__dirname, 'public/stylesheets')));
app.get('/', function(req, res){
  var fn = jade.compileFile('./views/index.jade');
  res.send(fn());
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
