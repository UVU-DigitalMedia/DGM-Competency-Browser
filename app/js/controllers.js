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

})

.controller('CourseCtrl', function($scope) {
  $scope.courses = [
		{
			'crnum': 'DGM 1090',
			'crtitle': 'Game Languages 1',
			'fav': true,
			'crhours': 3,
			'fallsem': true,
			'springsem': true,
			'summersem': false,
			'prereq': 'None',
			'crdesc': 'Teaches basic scripting for games. Topics in this course include: understanding the writing process; writing effective sentences, paragraphs, and short essays; patterns of organization; rhetorical modes and purposes; audience analysis; the composing process; and editing.'
		},
		{
			'crnum': 'DGM 2190',
			'crtitle': 'Game Languages 2',
			'fav': false,
			'crhours': 3,
			'fallsem': true,
			'springsem': true,
			'summersem': false,
			'prereq': 'DGM 1090',
			'crdesc': 'Teaches basic scripting for games. Topics in this course include: understanding the writing process; writing effective sentences, paragraphs, and short essays; patterns of organization; rhetorical modes and purposes; audience analysis; the composing process; and editing.'
		},
		{
			'crnum': 'DGM 3025',
			'crtitle': 'Game Languages 3',
			'fav': true,
			'crhours': 3,
			'fallsem': true,
			'springsem': true,
			'summersem': false,
			'prereq': 'DGM 2190',
			'crdesc': 'Teaches basic scripting for games. Topics in this course include: understanding the writing process; writing effective sentences, paragraphs, and short essays; patterns of organization; rhetorical modes and purposes; audience analysis; the composing process; and editing.'
		},
	];
});