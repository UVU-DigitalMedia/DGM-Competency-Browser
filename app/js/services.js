// Use Strict
'use strict';

// Create Module
angular.module('CompBrowser.services', ['ngResource', 'offClick', 'ngAnimate'])

// Open User Login
.factory('loginForm', function($rootScope, $location){
    
    // Set Variable
    $rootScope.loginClosed = true;
    
    // Close Login on Off Click
    $rootScope.loginOffClick = function(){
        
        $rootScope.loginClosed = true;
        
    }
    
    // Return
    return $rootScope.loginClosed;
   
})

// Random Color for Spotlight
.factory('randomColor', function($rootScope){
    
    // Create Array
    var colorArray = ['blue', 'green', 'red'];
    
    // Set Variable
    $rootScope.randomColor = $rootScope.randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    
    // Root Scope on State Change
    $rootScope.$on('$stateChangeStart', function(){
        
        // Set Random Color
        $rootScope.randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
       
    });
    
    // Return
    return $rootScope.randomColor;
    
})

// Other
.factory('Service', ['$resource',]);