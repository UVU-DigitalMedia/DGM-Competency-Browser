angular.module('CompBrowserControllers', [])

.controller('MainCtrl', function($scope) {
    'use strict';
    $scope.message = 'APP BASE';
})

.controller('RegisterCtrl', function($scope, $firebase, $firebaseAuth, FBURL) {
    'use strict';

    $scope.errors = '';

    //Define Firebase URL endpoints
    var userRef = new Firebase(FBURL + '/users');
    var ref = new Firebase(FBURL);


    $scope.authObj = $firebaseAuth(ref);

    var authData = userRef.getAuth();
    if (authData) {
        console.log('User ' + authData.uid + ' is logged in with ' + authData.provider);
        var userData = new Firebase(FBURL+'/users/'+authData.uid);

        // Attach an asynchronous callback to read the data at our posts reference
        userData.on('value', function(snapshot) {
          var userObj = snapshot.val();
          console.log(userObj);

        }, function (errorObject) {
          console.log('The read failed: ' + errorObject.code);
        });

    } else {
        console.log('User is logged out');
    }




    $scope.registerUser = function() {

      if($scope.person.email !== $scope.person.emailConf || $scope.person.email !== '' ) {
        $scope.errors = 'The email addresses do not match, please make sure they match';
      } else {
        $scope.errors = '';
      }

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

                  fName: $scope.person.fname,
                  lName: $scope.person.lname,
                  email: $scope.person.email,
                  password: $scope.person.password

              });
        // Show any errors
          }).catch(function(error) {
              console.error('Error: ', error);
          });
      }

    };
})

    .controller('TrackCtrl', function ($scope, trackResource) {
        'use strict';

        // Query to fake httpBackend service for testing purposes
        trackResource.query(function(data) {
            $scope.tracks = data;
        });

        $scope.tracks = [
            {'semester': 'Spring 2015',
                'note': 'Generals',
                'order': 1,
                'track': 'recommended'
            },
            {'semester': 'Fall 2015',
                'note': 'Undergraduate Classes',
                'order': 2,
                'track': 'recommended'
            },
            {'semester': 'Spring 2016',
                'note': 'Undergraduate Classes',
                'order': 3,
                'track':'custom1'
            },
            {'semester': 'Fall 2016',
                'note': 'Undergraduate Classes',
                'order': 4,
                'track':'custom1'
            },
            {'semester': 'Spring 2017',
                'note': 'Upper Division Classes',
                'order': 5,
                'track':'custom2'
            },
            {'semester': 'Fall 2017',
                'note': 'Upper Division Classes',
                'order': 6,
                'track':'custom2'
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

});
