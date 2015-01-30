angular.module('CompBrowser.controllers', [])

.controller('MainCtrl', function($scope) {
    $scope.message = 'APP BASE';
})

.controller('TrackCtrl', function ($scope) {
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
            'order': 3,
            'track':'custom1'
        },
        {'semester': 'Spring 2017',
            'note': 'Upper Division Classes',
            'order': 3,
            'track':'custom2'
        },
        {'semester': 'Fall 2017',
            'note': 'Upper Division Classes',
            'order': 3,
            'track':'custom2'
        }
    ];

    $scope.orderProp = 'order';
})

.controller('SkillsCtrl', function($scope) {
  $scope.skills = [
       {
         'title': 'Skill Name One'
       },
       {
        'title': 'Skill Name Two'
      },
      {
        'title': 'Skill Name Three'
      },
      {
        'title': 'Skill Name Four'
      },
      {
        'title': 'Skill Name Five'
      }
  ];

  $scope.employers = [
    {
      'name': 'Adobe'
    },
    {
      'name': 'At Task'
    },
    {
      'name': 'Domo'
    },
    {
      'name': 'LDS Church'
    }
  ];

});
