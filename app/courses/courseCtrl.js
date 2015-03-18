angular.module("courseCtrl", ['CompBrowser.services'])

.controller("CourseCtrl", function($scope, randomColor) {

	$scope.courses = [
		{
			"crnum": "DGM 1090",
			"crtitle": "Game Languages 1",
			"fav": true,
			"crhours": 3,
			"fallsem": true,
			"springsem": true,
			"summersem": false,
			"prereq": "None",
			"recommended": true,
			"crdesc": "Teaches basic scripting for games. Topics in this course include: understanding the writing process; writing effective sentences, paragraphs, and short essays; patterns of organization; rhetorical modes and purposes; audience analysis; the composing process; and editing."
		},
		{
			"crnum": "DGM 2190",
			"crtitle": "Game Languages 2",
			"fav": false,
			"crhours": 3,
			"fallsem": true,
			"springsem": false,
			"summersem": true,
			"prereq": "DGM 1090",
			"recommended": true,
			"crdesc": "Teaches basic scripting for games. Topics in this course include: understanding the writing process; writing effective sentences, paragraphs, and short essays; patterns of organization; rhetorical modes and purposes; audience analysis; the composing process; and editing."
		},
		{
			"crnum": "DGM 3025",
			"crtitle": "Game Languages 3",
			"fav": true,
			"crhours": 3,
			"fallsem": false,
			"springsem": true,
			"summersem": true,
			"prereq": "DGM 2190",
			"recommended": true,
			"crdesc": "Teaches basic scripting for games. Topics in this course include: understanding the writing process; writing effective sentences, paragraphs, and short essays; patterns of organization; rhetorical modes and purposes; audience analysis; the composing process; and editing."
		}
	];
		
});