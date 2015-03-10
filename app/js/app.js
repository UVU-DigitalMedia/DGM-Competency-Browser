angular.module('CompBrowser', ['common.services',
                               'ui.router',
                               'CompBrowserControllers',
                               'skillsCtrl',
                               'courseCtrl',
                               'empResourceMock',
                               'trackResourceMock',
                               'firebase'])

.run(function ($rootScope, $firebaseAuth, $firebase, $window) {
  'use strict';
  $rootScope.baseUrl = 'https://competency-browser.firebaseio.com/';
  var authRef = new Firebase($rootScope.baseUrl);
  $rootScope.auth = $firebaseAuth(authRef);
  var authData = authRef.getAuth();

  //log the user out and redirect
  $rootScope.logout = function() {
    authRef.unauth();
    $rootScope.checkSession();
  };

  //check to see if the user is logged in
  $rootScope.checkSession = function() {
    if (authData) {
        //Allow app access
        console.log('User ' + authData.uid + ' is logged in with ' + authData.provider);

        $rootScope.isLoggedIn = true;
        console.log('User is logged in: ' + $rootScope.isLoggedIn);
    } else {
        //Redirect to signin page
        console.log('User is logged out');
        $window.location.href = '#/signin';

        $rootScope.isLoggedIn = false;
        console.log('User is logged in: ' + $rootScope.isLoggedIn);
    }
   };
})

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
    .state('register', {
        url: '/register',
        templateUrl: 'templates/register.html',
        controller: 'RegisterCtrl'
    })
    .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
    })
    .state('tracks', {
        url: '/tracks',
        templateUrl: '../tracks/tracks.html',
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
    });
    $urlRouterProvider.otherwise('/');
})

// your Firebase URL goes here
.constant('FBURL', 'https://competency-browser.firebaseio.com/');
