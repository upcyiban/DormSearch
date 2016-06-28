'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:ResultCtrl
 * @description
 * # ResultCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('ResultCtrl', function ($scope, $rootScope) {
    $scope.result1 = $rootScope.message;
    console.log($rootScope.message);
  });
