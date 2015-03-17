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







//angular.module('CompBrowser.services', ['ngResource'])

CompBrowser.factory('Service', ['$resource',]);


