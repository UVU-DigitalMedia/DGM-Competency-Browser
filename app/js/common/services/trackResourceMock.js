(function () {
    'use strict';

    var app = angular.module('trackResourceMock', ['ngMockE2E']);

    app.run(function ($httpBackend) {

        var tracks =
            [
                {'semester': 'Spring 2015',
                    'note': 'Generals',
                    'order': 1,
                    'track': 'recommended'
                },
                {'semester': 'Fall 2015',
                    'note': 'Undergraduate Classes',
                    'order': 2,
                    'track': 'recommended'
                },
                {'semester': 'Spring 2016',
                    'note': 'Undergraduate Classes',
                    'order': 3,
                    'track':'custom1'
                },
                {'semester': 'Fall 2016',
                    'note': 'Undergraduate Classes',
                    'order': 4,
                    'track':'custom1'
                },
                {'semester': 'Spring 2017',
                    'note': 'Upper Division Classes',
                    'order': 5,
                    'track':'custom2'
                },
                {'semester': 'Fall 2017',
                    'note': 'Upper Division Classes',
                    'order': 6,
                    'track':'custom2'
                }
            ];

        var trackUrl = '/api/tracks';
        $httpBackend.whenGET(trackUrl).respond(tracks);

        // Pass through any requests for other files
        $httpBackend.whenGET(/.*/).passThrough();


    })
}());

