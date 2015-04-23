(function () {
    'use strict';

    var app = angular.module('empResourceMock', ['ngMockE2E']);

    app.run(function ($httpBackend) {

        var employers = [
            {
                "employerId": 1,
                "name": "Adobe",
                "skill": [
                    "2-D Packages",
                    "3-D Packages",
                    "Integrating Game Assets",
                    "Requirements Gathering",
                    "Identifying Art Problems"
                ]
            },
            {
                "employerId": 2,
                "name": "At Task",
                "skill": [
                    "Game Scripting",
                    "Advanced Game Scripting",
                    "Identifying Art Problems"
                ]
            },
            {
                "employerId": 3,
                "name": "Domo",
                "skill": [
                    "Advanced Game Scripting",
                    "3-D Packages"
                ]
            },
            {
                "employerId": 4,
                "name": "LDS Church",
                "skill": [
                    "Character Development",
                    "Character Modeling",
                    "Rendering Skills",
                    "Prototyping",
                    "Identifying Art Problems"
                ]
            }
        ];

        // Test structure
        // "skill": {
        //     "skillInfo": [
        //         { "id": "2-D Packages", "desc": "This is the skill desc." },
        //         { "id": "3-D Packages", "desc": "This is the skill desc2." },
        //         { "id": "Integrating Game Assets", "desc": "This is the skill desc3." },
        //         { "id": "Identifying Art Problems", "desc": "This is the skill desc4." }

        var employerUrl = '/api/employers';
        $httpBackend.whenGET(employerUrl).respond(employers);

        // Pass through any requests for other files
        $httpBackend.whenGET(/.*/).passThrough();


    })
}());
