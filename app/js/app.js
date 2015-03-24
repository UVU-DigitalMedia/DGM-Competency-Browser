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
                               'firebase',
                               'offClick',
                               'ngAnimate'])


.run(function ($rootScope, $firebaseAuth, $firebase, $window) {

    // Use Strict
    'use strict';

    // ------------------------------ Show/Hide Login Form

    // Set Variable
    $rootScope.loginClosed = true;

    // Close Login on Off Click
    $rootScope.loginOffClick = function(){

        $rootScope.loginClosed = true;

    };

    // ------------------------------ Random Colors

    // Create Array
    var colorArray = ['blue', 'green', 'red'];

    // Set Variable
    $rootScope.randomColor = $rootScope.randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];

    // Root Scope on State Change
    $rootScope.$on('$stateChangeStart', function(){

        // Set Random Color
        $rootScope.randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];

    });



  // ------------------------------ Start Firebase
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
