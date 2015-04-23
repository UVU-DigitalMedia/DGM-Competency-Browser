// Use Strict
'use strict';
// Create Module
var CompBrowser = angular.module('CompBrowser.services', ['ngResource']);

// Random Color for Spotlight
CompBrowser.factory('randomColor', function(){


    // Create Array
    var colorArray = ['blue', 'green', 'red'];

    // Set Scope Variable
    var randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];

    // Return Value
    return randomColor;

});

// User Authentication Service
CompBrowser.factory('userAuth', function($firebase, FBURL, $window, $http){


    return {
            checkSession: function() {
              var authRef = new Firebase(FBURL);
              var authData = authRef.getAuth();
              var userId = '';

              var isLoggedIn;

              if (authData) {
                  //Allow app access

                  //Grab the user ID from the DB
                  userId = authData.uid;
                  console.log(userId);

                  //Grab the generic token for the user from Firebase
                  var userAuthToken = authData.token;
                  console.log(userAuthToken);

                  isLoggedIn = true;
                  return isLoggedIn;
              } else {
                  isLoggedIn = false;
                  return isLoggedIn;
              }

              return authData;
            },
            getUserInfo: function() {
              var authRef = new Firebase(FBURL);
              var authData = authRef.getAuth();
              console.log(authData.uid);

              //var userData = new Firebase(FBURL+'/users/'+authData.uid);

              return $http.get(FBURL+'/users/'+authData.uid)
                .then(function(result) {
                    return result.data;
                });

            },
            logout: function() {
              var authRef = new Firebase(FBURL);
              authRef.unauth();

              //refresh the page
              $window.location.reload();
            }
        };




});
