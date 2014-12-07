/*jshint node:true*/
'use strict';

module.exports = function(app) {
  app.controller('mmmCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.hidden = true;
    $scope.calculate = function() {
      console.log($scope.mmm.numbers);
      var numsArray = $scope.mmm.numbers.split(' ');
      console.log('numsArray before its sent to api: ' + numsArray);
      console.log(numsArray);
      $http({
        method: 'POST',
        url: '/mmm',
        data: numsArray
      }).success(function(data, status, headers, config) {
        $scope.mmm.mean = data.mean;
        $scope.mmm.median = data.median;
        $scope.mmm.mode = data.mode;
        $scope.hidden = false;
      }).error(function(data, status, headers, config) {
        console.log(data);
      });
    };
  }]);
};
