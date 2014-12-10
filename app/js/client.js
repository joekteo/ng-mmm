'use strict';

require('angular/angular');

var mmmApp = angular.module('mmmApp', []);

require('./controllers/mmm_controller.js')(mmmApp);

require('./services/mmm_service.js')(mmmApp);
