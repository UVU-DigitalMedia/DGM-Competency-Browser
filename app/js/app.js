angular.module('CompBrowser', ['common.services',
                               'ui.router',
                               'ui.bootstrap',
                               'CompBrowserControllers',
                               'skillsCtrl',
                               'courseCtrl',
                               'empResourceMock',
                               'trackResourceMock',
                               'ncy-angular-breadcrumb',
                               'ngSanitize',
                               'firebase'])


// Configure Breadcrumbs
.config(function($breadcrumbProvider) {
    'use strict';
    $breadcrumbProvider.setOptions({
      prefixStateName: 'home',
      templateUrl: 'templates/breadcrumbs.html'
    });
})

.config(function($stateProvider, $urlRouterProvider) {
    'use strict';
    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'templates/home.html',
        controller: 'MainCtrl',
        ncyBreadcrumb: {label: 'Home'}
    })
    .state('about', {
        url: '/about',
        templateUrl: 'templates/about.html',
        ncyBreadcrumb: {label: 'About'}
    })
    .state('register', {
        url: '/register',
        templateUrl: 'templates/register.html',
        controller: 'RegisterCtrl',
        ncyBreadcrumb: {label: 'Register'}
    })
    .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl',
        ncyBreadcrumb: {label: 'Login'}
    })
    .state('tracks', {
        url: '/tracks',
        templateUrl: '../tracks/tracks.html',
        controller: 'TrackCtrl',
        ncyBreadcrumb: {label: 'Tracks'}
    })
    .state('courses', {
        url: '/courses',
        templateUrl: 'courses/courses.html',
        controller: 'CourseCtrl',
        ncyBreadcrumb: {label: 'Courses'}
    })
    .state('skills', {
        url: '/skills',
        templateUrl: 'skills/skills.html',
        controller: 'SkillsCtrl',
        ncyBreadcrumb: {label: 'Skills'}
    });
    $urlRouterProvider.otherwise('/');
})

// your Firebase URL goes here
.constant('FBURL', 'https://competency-browser.firebaseio.com/');
