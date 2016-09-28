'use strict';

angular.module('massachusettsElectionatorApp')
  .service('getElectionInfo', function($http) {
    this.congressGetter = function() {
      console.log('you in da congress');
    }
  });