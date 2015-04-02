(function () {
    'use strict';

    angular.module('skillsCtrl', ['ui.bootstrap', 'CompBrowser.services'])

    .controller('SkillsCtrl', function($scope, empResource) {

        $scope.isCollapsed = true;

        // Query to fake httpBackend service for testing purposes
        empResource.query(function(data) {
            $scope.employers = data;
        });

        // Array to store skill values
        $scope.selected = [];

        // Function to push values into array
        $scope.check = function(e) {
            var i = $.inArray(e, $scope.selected);
            if (i > -1) {
                $scope.selected.splice(i, 1);
            } else {
                $scope.selected.push(e);
            }
        };

        // Custom function to filter value for checkboxes
        // Determines if value is included within array and if so, returns it
        $scope.searchSkills = function(employers) {
            if ($scope.selected.length > 0) {
                if ($.inArray(employers.skill, $scope.selected) < 0)
                return;
            }
                return employers;
            };

        // Function to toggle favorite skill class
        $scope.classToggle = "";
        $scope.favorite = function() {
            if ($scope.classToggle === "" ) {
                $scope.classToggle = "favoriteSkill";
            } else {
                $scope.classToggle = "";
            }
            console.log("Class Name: " + $scope.classToggle);
        }

    });
}());
