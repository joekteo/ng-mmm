/*jshint node:true*/
'use strict';

var express = require('express');
var bodyparser = require('body-parser');
var app = express();

app.use(bodyparser.json());
app.use(express.static(__dirname + '/build'));

require('./routes/mmmRoutes')(app);

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
  console.log('server on port', app.get('port'));
});
