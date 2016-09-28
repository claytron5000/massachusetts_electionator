'use strict';

/**
 * @ngdoc overview
 * @name massachusettsElectionatorApp
 * @description
 * # massachusettsElectionatorApp
 *
 * Main module of the application.
 */
angular
  .module('massachusettsElectionatorApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
