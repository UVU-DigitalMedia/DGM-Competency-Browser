/**
 * Created by Deb on 8/21/2014.
 */
(function () {
    'use strict';

    angular
        .module('common.services')
        .factory('empResource',
                ['$resource',
                 empResource]);

    function empResource($resource) {
        return $resource('/api/employers/:employerId')
    };


}());
