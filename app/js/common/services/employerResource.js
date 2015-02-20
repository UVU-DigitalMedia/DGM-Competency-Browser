(function () {
    'use strict';

    angular.module('common.services')
        .factory('employerResource',
                ['$resource',
                 employerResource]);

    function employerResource($resource) {
        return $resource('/api/employers/:employerId')
    };

}());
