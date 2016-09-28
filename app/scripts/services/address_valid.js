'use strict';
angular.module('massachusettsElectionatorApp')
  .factory('validateService', function($http, $q) {
    var service = {};
    var baseUrl = 'https://us-street.api.smartystreets.com/street-address?';
    var _street ='';
    var _city = '';
    var _zip = '';
    var _finalUrl = '';

    var makeUrl = function(street, city, zip) {
      // Get authId, authToken and inputID from https://smartystreets.com/
      // The inputID is built for front end frameworks, but I couldn't get it working
      // in a local environment.
      var authId = '';
      var authToken = '';
      var inputID = '';
      var smartyapi = 'https://us-street.api.smartystreets.com';
      var streetString = encodeURIComponent(street);
      var cityString = encodeURIComponent(city);
      var stateString = '&state=MA';
      var zipString = zip;

      _finalUrl = 'https://us-street.api.smartystreets.com/street-address?' + 
        'auth-id=' + authId + 
        '&auth-token=' + authToken +
        //'input_id=' + inputID +
        '&street=' + streetString +
        '&city=' + cityString +
        '&state=MA' + 
        '&zipcode=' + zipString;

      return _finalUrl;
    };
    service.validate = function(_street, _city, _zip) {
      makeUrl(_street, _city, _zip);
      var deferred = $q.defer();
      $http({
        url: _finalUrl,
        method: 'GET'
      }).success(function(data){
        deferred.resolve(data);
      }).error(function(){
        deferred.reject('There was an error');
      })
      return deferred.promise;
    }
    return service;
});