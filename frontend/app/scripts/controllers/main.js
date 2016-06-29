'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('MainCtrl', function ($scope, $http, $location, $rootScope) {
    switchNav('mainpage');
    $scope.search = function () {
      var name = $scope.name;
      var number = $scope.number;
      $http.get('http://yb.upc.edu.cn:8087/getdorm?name='+name+'&number='+number).then(function (response) {
        console.log(response.data);
        if ('code' in response.data){
          //fail
          $('.fail-message').show();
        }else {
          $rootScope.message = response.data[1];
          $location.url('result');
        }
      });
    };

  });
