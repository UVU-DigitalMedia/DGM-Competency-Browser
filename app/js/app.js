angular.module('CompBrowser', ['common.services', 'ui.router', 'CompBrowser.controllers', 'skillsCtrl', 'courseCtrl', 'productResourceMock', 'employerResourceMock'])

.config(function($stateProvider, $urlRouterProvider) {
    'use strict';
    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'templates/home.html',
        controller: 'MainCtrl'
    })
    .state('about', {
        url: '/about',
        templateUrl: 'templates/about.html'
    })
    .state('tracks', {
        url: '/tracks',
        templateUrl: 'templates/tracks.html',
        controller: 'TrackCtrl'
    })
    .state('courses', {
        url: '/courses',
        templateUrl: 'courses/courses.html',
        controller: 'CourseCtrl'
    })
    .state('skills', {
        url: '/skills',
        templateUrl: 'skills/skills.html',
        controller: 'SkillsCtrl'
    })
    // Products
    .state('products', {
        url: '/products',
        templateUrl: 'products/productListView.html',
        controller: 'ProductListCtrl as vm'
    });
    $urlRouterProvider.otherwise('/');
});
