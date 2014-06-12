'use strict';

/**
 * @ngdoc function
 * @name nlApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nlApp
 */
angular.module('nlApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
