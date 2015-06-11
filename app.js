var jsonObj = require("./data/nav.json");
var express = require('express');
var logger = require('morgan');
var path = require('path');
var api = require('./api');
var app = express();

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', api);

var way = jsonObj;


///server to build the nav

var http = require("http");
var server = http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "application/json", "Access-Control-Allow-Origin": "*"});
  response.write(JSON.stringify(way));
  response.end();
});
server.listen(8080);

module.exports = app;


