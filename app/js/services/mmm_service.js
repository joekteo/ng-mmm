'use strict';

module.exports = function(app) {

  app.factory('mmmService', function() {
    return {
      calculate: function(numArray, scope) {
        var findMean = function(array) {
          var sum = 0;
          for (var i = 0; i < array.length; i++) {
            sum += array[i];
          }
          return sum / numArray.length;
        };

        var findMedian = function(numArray) {
          numArray = numArray.sort();
          var midNum = Math.floor(numArray.length / 2);
          return numArray[midNum];
        };

        var findMode = function(numArray) {
          var map = {};
          var maxEl = numArray[0];
          var maxCount = 1;
          for (var i = 0; i < numArray.length; i++) {
            var el = numArray[i];
            if (map[el] === null) {
              map[el] = 1;
            } else {
              map[el]++;
            } if (map[el] > maxCount) {
              maxEl = el;
              maxCount = map[el];
            }
          }
          return maxEl;
        };

        scope.mmm.mean = findMean(numArray);
        scope.mmm.median = findMedian(numArray);
        scope.mmm.mode = findMode(numArray);
        scope.hiddenMMM = false;
      }
    };
  });
};
