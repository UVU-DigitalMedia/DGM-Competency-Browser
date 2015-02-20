angular.module('CompBrowserControllers', [])

.controller('MainCtrl', function($scope) {
    'use strict';
    $scope.message = 'APP BASE';
})

.controller('TrackCtrl', function ($scope) {
    'use strict';
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
