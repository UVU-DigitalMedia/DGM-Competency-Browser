angular.module('CompBrowser.controllers', [])

.controller('SkillsCtrl', function($scope) {

  $scope.employers = [
    {
      'name': 'Adobe',
      'skill': '2-D Packages'
    },
    {
      'name': 'At Task',
      'skill': 'Game Scripting'
    },
    {
      'name': 'Domo',
      'skill': 'Advanced Game Scripting'
    },
    {
      'name': 'LDS Church',
      'skill': 'Character Development'
    }
  ];

});
