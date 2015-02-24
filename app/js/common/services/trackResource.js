(function () {
    'use strict';

    angular
        .module('common.services')
        .factory('trackResource',
            ['$resource',
            trackResource]);

    function trackResource($resource) {
        return $resource('/api/tracks/:order')
    };


}());

