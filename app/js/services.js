// Create Module
var CompBrowser = angular.module('CompBrowser.services', ['ngResource']);

// Random Color for Spotlight
CompBrowser.factory('randomColor', function(){

    // Use Strict
    'use strict';

    // Create Array
    var colorArray = ['blue', 'green', 'red'];

    // Set Scope Variable
    var randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];

    // Return Value
    return randomColor;

});

// User Authentication Service
CompBrowser.factory('userAuth', function($firebase, FBURL){

    // Use Strict
    'use strict';

    return {
            checkSession: function() {
              var authRef = new Firebase(FBURL);
              var authData = authRef.getAuth();
              var isLoggedIn;

              if (authData) {
                  //Allow app access

                  isLoggedIn = true;
                  console.log('User is logged in: ' + isLoggedIn);
                  return isLoggedIn;
              } else {
                  isLoggedIn = false;
                  console.log('User is logged in: ' + isLoggedIn);
                  return isLoggedIn;
              }

              return authData;
            },
            get: function() {
                var test = 'Awesome';
                return test;
            }
        };




});







//angular.module('CompBrowser.services', ['ngResource'])

CompBrowser.factory('Service', ['$resource',]);
