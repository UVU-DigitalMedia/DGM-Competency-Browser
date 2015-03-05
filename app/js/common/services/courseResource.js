(function () {
    'use strict';

    angular.module('common.services').factory('courseResource', ['$resource', courseResource]);

    function empResource($resource) {
        return $resource('/api/courses/:crnum')
    };


}());
