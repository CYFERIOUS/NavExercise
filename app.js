var styleComp = require('./api/styles.js');
var server = require('./api/server.js');
var express = require('express');
var logger = require('morgan');
var path = require('path');
var api = require('./api');
var app = express();

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', api);

module.exports = app;


