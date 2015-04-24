(function () {
    'use strict';

    var app = angular.module('empResourceMock', ['ngMockE2E']);

    app.run(function ($httpBackend) {

        var employers = [
            {
                "employerId": 1,
                "name": "Adobe",
                "skill": {
                    "skillName": [
                        "2-D Packages",
                        "3-D Packages",
                        "Integrating Game Assets",
                        "Requirements Gathering",
                        "Identifying Art Problems"
                    ],
                    "skillDescription": [
                        "Description of skill goes here. Isn't it going to be cool."
                    ]
                }
            },
            {
                "employerId": 2,
                "name": "At Task",
                "skill": {
                    "skillName": [
                        "Game Scripting",
                        "Advanced Game Scripting",
                        "Identifying Art Problems"
                    ],
                    "skillDescription": [
                        "This is the Description"
                    ]
                }
            },
            {
                "employerId": 3,
                "name": "Domo",
                "skill": {
                    "skillName": [
                        "Advanced Game Stuff",
                        "4-D Packing"
                    ],
                    "skillDescription": [
                        "Description of Skill"
                    ]
                }
            },
            {
                "employerId": 4,
                "name": "LDS Church",
                "skill": {
                    "skillName": [
                        "Character Development",
                        "Character Modeling",
                        "Rendering Skills",
                        "Prototyping",
                        "Identifying Art Problems"
                    ],
                    "skillDescription": [
                        "Description 1"
                    ]
                }
            }
        ];

        var employerUrl = '/api/employers';
        $httpBackend.whenGET(employerUrl).respond(employers);

        // Pass through any requests for other files
        $httpBackend.whenGET(/.*/).passThrough();

    })
}());
