/**
 * Created by tedyuen on 2017/1/23.
 */
global.$ = global.jQuery = require('jquery');
require('bootstrap');
require('angular');

var ithooksApp = angular.module("ithooksApp",[]);


/**
 * Created by tedyuen on 2017/1/23.
 */
ithooksApp.controller('appController',['$scope',
  function ($scope) {
    $scope.test = "abc";

}]);
