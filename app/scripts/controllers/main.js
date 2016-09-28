'use strict';

/**
 * @ngdoc function
 * @name massachusettsElectionatorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the massachusettsElectionatorApp
 */
angular.module('massachusettsElectionatorApp')
  .controller('MainCtrl', function ($scope, validateService) {
    $scope.data = {};
    $scope.validateAddress = function() {
      //$scope.addressData = validateService.validate($scope.street, $scope.town, $scope.zip);
      validateService.validate($scope.street, $scope.town, $scope.zip)
        .then(function(data){
          $scope.data.addressData = data;
        }, function(data){
          alert(data);
        })
    }

    // buildElectionInfo = function($scope, getElectionInfo) {
    //   getElectionInfo.congressGetter($scope.addressData);
    // }
  });
