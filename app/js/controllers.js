angular.module('CompBrowserControllers', ['ui.bootstrap', 'CompBrowser.services' ])

.controller('MainCtrl', function($scope) {
    'use strict';
    $scope.message = 'APP BASE';

})

.controller('menuCtrl', function($scope, userAuth) {
    'use strict';

    //Check Session
     $scope.isLoggedIn = userAuth.checkSession();

     $scope.logout = function() {
       userAuth.logout();
     };

})

.controller('LoginCtrl', function($scope, userAuth, $firebase, $firebaseAuth, FBURL, $window) {
    'use strict';

    //Check Session
    //userAuth.checkSession();
    //userAuth.getUserInfo()
    //Get the logged in users info
    userAuth.getUserInfo().then(function(data) {
			$scope.currentUser = data;
      console.log('Awesome' + $scope.currentUser);
		});

      var ref = new Firebase(FBURL);

      //LOGIN
      $scope.login = function () {
          ref.authWithPassword({

              email    : $scope.email,
              password : $scope.password

          }, function(error, authData) {
              if (error) {
                  console.log('Login Failed!', error);
              } else {
                  console.log('Authenticated successfully with payload:', authData);
                  $window.location.href = '#/';
                  //refresh the page
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
