angular.module('skillsCtrl', [])

.controller('SkillsCtrl', function($scope, employerResource) {
    var vm = this;
    
    employerResource.query(function(data) {
        vm.employers = data;
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

});
