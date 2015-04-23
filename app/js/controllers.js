angular.module('CompBrowserControllers', ['ui.bootstrap', 'CompBrowser.services' ])

.controller('MainCtrl', function($scope) {
    'use strict';
    $scope.message = 'APP BASE';
    
    
    // Temp Favorite Classes
    $scope.favClasses = ['DGM 3270 DVD Authoring 2', 'DGM 1061 Motion Picture Editing', 'DGM 1063 Image Editing'];
    $scope.favSkills = ['2-D Packages', '3-D Packages', 'Integrating Game Assets', 'Requirements Gathering'];
    $scope.earnedComps = ['AngularJS', 'WordPress', 'JavaScript', 'jQuery', 'Drupal', 'NodeJS', 'Grunt & Gulp'];

})

.controller('MenuCtrl', function($rootScope, userAuth, $firebase, $firebaseAuth, FBURL, $window){

    // Use Strict
    'use strict';

    // ------------------------------ Show Nav Based on Login Status

    // Check Session
    $rootScope.isLoggedIn = userAuth.checkSession();

    // Logout
    $rootScope.logout = function() {
       userAuth.logout();
    };

    // ------------------------------ Show/Hide Login Form

    // Set Variable
    $rootScope.isLoginFormOpen = false;

    // Open Login Form Function
    $rootScope.openLoginForm = function(){$rootScope.isLoginFormOpen = true;};

    // Close Login Form Function
    $rootScope.closeLoginForm = function(){$rootScope.isLoginFormOpen = false;};

    // ------------------------------ Secondary Nav Hover

    // Set Variable
    $rootScope.isSubNavOpened = false;

    // Open Function
    $rootScope.openSubNav = function(){

        // Modify Variable
        $rootScope.isSubNavOpened = true;

    };

    // Close Function
    $rootScope.closeSubNav = function(){

        // Modify Variable
        $rootScope.isSubNavOpened = false;

    };




    // ------------------------------ Login

    // Get User Info
   /* userAuth.getUserInfo().then(function(data) {

        // Assign Current User
        $rootScope.currentUser = data;

        // Confirm User
        console.log('Awesome' + $rootScope.currentUser);

    }); */

    // Make Reference
    var ref = new Firebase(FBURL);

    // Login Function
    $rootScope.login = function() {
        $rootScope.email = 'test@test.com';
        $rootScope.password = 'asdf';

        // Get Details
        ref.authWithPassword({

            // Get Information
            email    : $rootScope.email,
            password : $rootScope.password

        }, function(error, authData){

            // If Error
            if(error){console.log('Login Failed!', error);}

            // Else
            else{

                // Print Success
                console.log('Authenticated successfully with payload:', authData);

                // Set URL
                $window.location.href = '#/';

                // Refresh
                $window.location.reload();

            }

        });

    };

})

.controller('RegisterCtrl', function($scope, $firebase, $firebaseAuth, FBURL, $window) {
    'use strict';

    $scope.errors = '';

    //Define Firebase URL endpoints
    //var userRef = new Firebase(FBURL + '/users');
    var ref = new Firebase(FBURL);


    $scope.authObj = $firebaseAuth(ref);

    //var authData = userRef.getAuth();

    $scope.registerUser = function() {



      if($scope.errors !== '') {
        //Fix errors before submitting the form
        console.log('There were errors');

      } else {
        //Create the user in firebase
          $scope.authObj.$createUser({

              email: $scope.person.email,
              password: $scope.person.password

          }).then(function(userData) {
              console.log('User ' + userData.uid + ' created successfully!');
              return $scope.authObj.$authWithPassword({

                  email: $scope.person.email,
                  password: $scope.person.password

              });
        //Log user in
          }).then(function(authData) {
              console.log('Logged in as:', authData.uid);

              ref.child('users').child(authData.uid).set({

                  //Grab the form values to store in the DB
                  fName: $scope.person.fname,
                  lName: $scope.person.lname,
                  studentID: $scope.person.studentID,
                  email: $scope.person.email,
                  password: $scope.person.password

              });
        // Show any errors
      }).then(function() {

        //redirect to the main page
        $window.location.href = '#/';
        //refresh the page
        $window.location.reload();

      }).catch(function(error) {
              console.error('Error: ', error);
          });
      }

    };
})

    .controller('TrackCtrl', function ($scope, trackResource) {
        'use strict';

        // Call Spotlight Random Color Service
        var randomColor;
        $scope.randomColor = randomColor;


        // Query to fake httpBackend service for testing purposes
        trackResource.query(function(data) {
            $scope.tracks = data;
        });

        $scope.tracks = [
            {'semester': 'Spring 2015',
                'note': 'Generals',
                'order': 1,
                'track': 'recommended',
                'classes' :[
                {
                    'crnum': 'DGM 1090',
                    'crtitle': 'Game Languages 1',
                    'fav': true,
                    'crhours': 3,
                    'prereq': 'None',
                    'recommended': true,
                    'crdesc': 'Teaches basic scripting for games.'
                },
                {
                    'crnum': 'DGM 1090',
                    'crtitle': 'Game Languages 1',
                    'fav': true,
                    'crhours': 3,
                    'prereq': 'None',
                    'recommended': true,
                    'crdesc': 'Teaches basic scripting for games.'
                },
                {
                    'crnum': 'DGM 1090',
                    'crtitle': 'Game Languages 1',
                    'fav': true,
                    'crhours': 3,
                    'prereq': 'None',
                    'recommended': true,
                    'crdesc': 'Teaches basic scripting for games.'
                }
                ]
            },
            {'semester': 'Fall 2015',
                'note': 'Undergraduate Classes',
                'order': 2,
                'track': 'recommended',
                'classes' :[
                    {
                        'crnum': 'DGM 1090',
                        'crtitle': 'Game Languages 1',
                        'fav': true,
                        'crhours': 3,
                        'prereq': 'None',
                        'recommended': true,
                        'crdesc': 'Teaches basic scripting for games.'
                    },
                    {
                        'crnum': 'DGM 1090',
                        'crtitle': 'Game Languages 1',
                        'fav': true,
                        'crhours': 3,
                        'prereq': 'None',
                        'recommended': true,
                        'crdesc': 'Teaches basic scripting for games.'
                    },
                    {
                        'crnum': 'DGM 1090',
                        'crtitle': 'Game Languages 1',
                        'fav': true,
                        'crhours': 3,
                        'prereq': 'None',
                        'recommended': true,
                        'crdesc': 'Teaches basic scripting for games.'
                    },
                    {
                        'crnum': 'DGM 1090',
                        'crtitle': 'Game Languages 1',
                        'fav': true,
                        'crhours': 3,
                        'prereq': 'None',
                        'recommended': true,
                        'crdesc': 'Teaches basic scripting for games.'
                    },
                    {
                        'crnum': 'DGM 1090',
                        'crtitle': 'Game Languages 1',
                        'fav': true,
                        'crhours': 3,
                        'prereq': 'None',
                        'recommended': true,
                        'crdesc': 'Teaches basic scripting for games.'
                    }
                ]
            },
            {'semester': 'Spring 2016',
                'note': 'Undergraduate Classes',
                'order': 3,
                'track':'custom1',
                'classes' :[
                    {
                        'crnum': 'DGM 1090',
                        'crtitle': 'Game Languages 1',
                        'fav': true,
                        'crhours': 3,
                        'prereq': 'None',
                        'recommended': true,
                        'crdesc': 'Teaches basic scripting for games.'
                    },
                    {
                        'crnum': 'DGM 1090',
                        'crtitle': 'Game Languages 1',
                        'fav': true,
                        'crhours': 3,
                        'prereq': 'None',
                        'recommended': true,
                        'crdesc': 'Teaches basic scripting for games.'
                    }
                ]
            },
            {'semester': 'Fall 2016',
                'note': 'Undergraduate Classes',
                'order': 4,
                'track':'custom1',
                'classes' :[
                    {
                        'crnum': 'DGM 1090',
                        'crtitle': 'Game Languages 1',
                        'fav': true,
                        'crhours': 3,
                        'prereq': 'None',
                        'recommended': true,
                        'crdesc': 'Teaches basic scripting for games.'
                    },
                    {
                        'crnum': 'DGM 1090',
                        'crtitle': 'Game Languages 1',
                        'fav': true,
                        'crhours': 3,
                        'prereq': 'None',
                        'recommended': true,
                        'crdesc': 'Teaches basic scripting for games.'
                    },
                    {
                        'crnum': 'DGM 1090',
                        'crtitle': 'Game Languages 1',
                        'fav': true,
                        'crhours': 3,
                        'prereq': 'None',
                        'recommended': true,
                        'crdesc': 'Teaches basic scripting for games.'
                    },
                    {
                        'crnum': 'DGM 1090',
                        'crtitle': 'Game Languages 1',
                        'fav': true,
                        'crhours': 3,
                        'prereq': 'None',
                        'recommended': true,
                        'crdesc': 'Teaches basic scripting for games.'
                    }
                ]
            },
            {'semester': 'Spring 2017',
                'note': 'Upper Division Classes',
                'order': 5,
                'track':'custom2',
                'classes' :[
                    {
                        'crnum': 'DGM 1090',
                        'crtitle': 'Game Languages 1',
                        'fav': true,
                        'crhours': 3,
                        'prereq': 'None',
                        'recommended': true,
                        'crdesc': 'Teaches basic scripting for games.'
                    }
                ]
            },
            {'semester': 'Fall 2017',
                'note': 'Upper Division Classes',
                'order': 6,
                'track':'custom2',
                'classes' :[
                    {
                        'crnum': 'DGM 1090',
                        'crtitle': 'Game Languages 1',
                        'fav': true,
                        'crhours': 3,
                        'prereq': 'None',
                        'recommended': true,
                        'crdesc': 'Teaches basic scripting for games.'
                    },
                    {
                        'crnum': 'DGM 1090',
                        'crtitle': 'Game Languages 1',
                        'fav': true,
                        'crhours': 3,
                        'prereq': 'None',
                        'recommended': true,
                        'crdesc': 'Teaches basic scripting for games.'
                    },
                    {
                        'crnum': 'DGM 1090',
                        'crtitle': 'Game Languages 1',
                        'fav': true,
                        'crhours': 3,
                        'prereq': 'None',
                        'recommended': true,
                        'crdesc': 'Teaches basic scripting for games.'
                    },
                    {
                        'crnum': 'DGM 1090',
                        'crtitle': 'Game Languages 1',
                        'fav': true,
                        'crhours': 3,
                        'prereq': 'None',
                        'recommended': true,
                        'crdesc': 'Teaches basic scripting for games.'
                    },
                    {
                        'crnum': 'DGM 1090',
                        'crtitle': 'Game Languages 1',
                        'fav': true,
                        'crhours': 3,
                        'prereq': 'None',
                        'recommended': true,
                        'crdesc': 'Teaches basic scripting for games.'
                    },
                    {
                        'crnum': 'DGM 1090',
                        'crtitle': 'Game Languages 1',
                        'fav': true,
                        'crhours': 3,
                        'prereq': 'None',
                        'recommended': true,
                        'crdesc': 'Teaches basic scripting for games.'
                    }
                ]
            }
        ];

        $scope.orderProp = 'order';


        // Array to store skill values
        $scope.trackIncludes = [];

        $scope.includesTracks = function(tracks) {
            var i = $.inArray(tracks, $scope.trackIncludes);
            if (i > -1) {
                $scope.trackIncludes.splice(i, 1);
            } else {
                $scope.trackIncludes.push(tracks);
            }
        };

        $scope.trackFilter = function(tracks) {
            if ($scope.trackIncludes.length > 0) {
                if ($.inArray(tracks.track, $scope.trackIncludes) < 0){
                    return;}

            }

            return tracks;
        };
    })

//example controller for testing - THIS ISN" USED
.controller('PasswordController', function PasswordController($scope) {
  'use strict';

  $scope.password = '';
  $scope.grade = function() {
    var size = $scope.password.length;
    if (size > 8) {
      $scope.strength = 'strong';
    } else if (size > 3) {
      $scope.strength = 'medium';
    } else {
      $scope.strength = 'weak';
    }
  };

  $scope.message = function(){
    return 'I am awesome';
  };

})

.controller('newSemester', function ($scope, $modal) {
    'use strict';

    $scope.open = function () {

        $modal.open({
            templateUrl: 'addNewSemester.html',
            controller: 'ModalInstanceCtrl'
        });
    };
})

.controller('newClass', function ($scope, $modal) {
    'use strict';
    $scope.open = function () {

        $modal.open({
            templateUrl: 'addNewCourse.html',
            controller: 'ModalInstanceCtrl'
        });
    };
})


// ---------------------- Profile Controller
.controller('ProfileCtrl', function($scope){

    // Use Strict
    'use strict';

    // Set Scope Variables
    $scope.userName = 'John Smith';
    $scope.userProgram = 'Internet Technologies Student';
    $scope.studentID = '10435435';

})


// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

    .controller('ModalInstanceCtrl', function ($scope, $modalInstance) {
        'use strict';

        $scope.ok = function () {
            $modalInstance.close('add');
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    });
