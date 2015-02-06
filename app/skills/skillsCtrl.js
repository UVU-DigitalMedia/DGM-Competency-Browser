angular.module('skillsCtrl', [])

.controller('SkillsCtrl', function($scope) {

  $scope.employers = [
    {
      "name": "Adobe",
      "skill": [
          "2-D Packages"
      ]
    },
    {
      "name": "At Task",
      "skill": [
          "Game Scripting"
      ]
    },
    {
      "name": "Domo",
      "skill": [
          "Advanced Game Scripting",
          "3-D Packages"
      ]
    },
    {
      "name": "LDS Church",
      "skill": [
          "Character Development",
          "Character Modeling",
          "Rendering"
      ]
    }
  ];
});
