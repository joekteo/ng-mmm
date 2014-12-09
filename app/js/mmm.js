'use strict'

var MeanMedianMode = function() {
  this.mean = function(numArray) {
    var sum = 0;
    for (var i = 0; i < numArray.length; i++) {
      sum += numArray[i];
    }
    return sum / numArray.length;
    //divide the total number
  };
    // console.log(findMean(numArray));

  this.median = function(numArray) {
    numArray = numArray.sort();
    //sort numbers numerically and in ascending order
    var midNum = Math.floor(numArray.length / 2);
    //rounds all the number to its nearest integer
    //get all the number from the list and divide by 2
    return numArray[midNum];
  };
  // console.log(findMedian(numArray));

  this.mode = function(numArray) {
    //sort number
    //scan the array for consectuive occurrence
    //make a copy of the array into objects
    var map = {};
    var maxEl = numArray[0];
    var maxCount = 1;
    for (var i = 0; i < numArray.length; i++)
    {
      var el = numArray[i];
      if (map[el] === null) {
        map[el] = 1;
      } else {
        map[el]++;
      }
      if (map[el] > maxCount)
      {
        maxEl = el;
        maxCount = map[el];
      }
    }
    return maxEl;
  };
};
var mmm = new MeanMedianMode();
module.exports = mmm;
