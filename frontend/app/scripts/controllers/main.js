'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('MainCtrl', function ($scope, $http, $location) {

    $scope.search = function () {
      var name = $scope.name;
      var number = $scope.number;
      $http.get('http://yb.upc.edu.cn:8087/getdorm?name='+name+'&number='+number).then(function (response) {
        console.log(response.data);
      });
      $location.path('result');
    }


  });
