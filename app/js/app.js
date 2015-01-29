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
        url: "/courses",
         url: "/courses",
         templateUrl: "templates/courses.html"
    })
    .state('skills', {
        url: "/skills",
        templateUrl: "templates/skills.html",
        controller: 'SkillsCtrl'
    })
    $urlRouterProvider.otherwise('/');
});
