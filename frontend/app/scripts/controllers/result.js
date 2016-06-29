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
    $scope.resultMessage = $rootScope.message;
  });
