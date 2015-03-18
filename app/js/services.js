// Use Strict
'use strict';

// Create Module
var CompBrowser = angular.module('CompBrowser.services', ['ngResource']);

// Open User Login
CompBrowser.factory('loginForm', function($rootScope, $location){
    
    // Set Open Function
    $rootScope.openLoginForm = function(){
        
        $rootScope.loginFormClosed = 'open'; 
        
    }
    
    // Set Close Function
    $rootScope.closeLoginForm = function(){
        
        $rootScope.loginFormClosed = 'closed'; 
        
    }
    
    
    

   
})

// Random Color for Spotlight
.factory('randomColor', function($rootScope){
    
    // Create Array
    var colorArray = ['blue', 'green', 'red'];
    
    // Root Scope on State Change
    $rootScope.$on('$stateChangeStart', function(){
        
        // Set Random Color
        $rootScope.randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
       
    });
    
});







//angular.module('CompBrowser.services', ['ngResource'])

CompBrowser.factory('Service', ['$resource',]);


