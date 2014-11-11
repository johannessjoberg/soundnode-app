'use strict'

var app = angular.module('myApp', []);

app.controller('MainCtrl', function($scope) {
  $scope.name = 'scloud';
  $scope.shout = function(){
    $scope.greeting = "Hello " + $scope.name;
  };
});
