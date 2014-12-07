/*jshint node:true*/
'use strict';

require('angular/angular');

var mmmApp = angular.module('mmmApp', []);

require('./controllers/mmmCtrl.js')(mmmApp);
