angular.module('CompBrowser', ['ui.router', 'CompBrowser.controllers'])

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('home', {
        url: "/",
        templateUrl: "templates/home.html",
        controller: 'MainCtrl'
    })
    .state('about', {
        url: "/about",
        templateUrl: "templates/about.html"
    })
    .state('tracks', {
         url: "/tracks",
         templateUrl: "templates/tracks.html",
         controller: 'TrackCtrl'
    })
	.state('courses', {
        url: "/about",
        templateUrl: "templates/courses.html"
    })
    $urlRouterProvider.otherwise('/');
});
