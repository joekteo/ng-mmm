'use strict';

require('../../app/js/client');
require('angular-mocks');

describe('App Controllers', function() {
  var $controllerConstructor;
  var $httpBackend;
  var $scope;

  beforeEach(angular.mock.module('mmmApp'));

  beforeEach(angular.mock.inject(function($rootScope, $controller) {
    $scope = $rootScope.$new();
    $controllerConstructor = $controller;
  }));

  it('should create a mmmCtrl', function() {
    var mmmController = $controllerConstructor('mmmCtrl', {$scope: $scope});
    expect(typeof mmmController).toBe('object');
  });

  describe('rest request', function() {
    beforeEach(angular.mock.inject(function(_$httpBackend_) {
      $httpBackend = _$httpBackend_;
    }));

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('make a call to mmm', function() {
      $httpBackend.expectPOST('/mmm').respond(200, {mean: 12, median: 44, mode: '32123'});

      $controllerConstructor('mmmCtrl', {$scope: $scope});
      $scope.mmm = {};
      $scope.mmm.numbers = '5 5 6 8';
      $scope.calculate();
      $httpBackend.flush();

      expect($scope.mmm.mean).toBeDefined();
      expect($scope.mmm.median).toBeDefined();
      expect($scope.mmm.mode).toBeDefined();
      expect($scope.mmm.mean).toBe(12);
      expect($scope.mmm.median).toBe(44);
      expect($scope.mmm.mode).toBe('32123');
      expect($scope.hidden).toBe(false);
    });
  });
});
