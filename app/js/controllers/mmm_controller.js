'use strict';

module.exports = function(app) {
  app.controller('mmmCtrl', ['$scope', '$http', 'mmmService', function($scope, $http, mmmService) {
    $scope.hidden = true;
    $scope.calculate = function() {
      var numArray = $scope.mmm.numbers.split(' ');
      mmmService.calculate(numArray, $scope);
    };
  }]);
};
