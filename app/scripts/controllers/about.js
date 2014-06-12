'use strict';

/**
 * @ngdoc function
 * @name nlApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the nlApp
 */
angular.module('nlApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
