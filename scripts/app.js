// wrap in an IIFE to remove variables from global scope
(function() {
	"use strict";

	angular.module("folioGenericApp", ["ui.router", "responsive-images"]) // eslint-disable-line no-undef
		.config(function($stateProvider, $urlRouterProvider, $compileProvider, $locationProvider) {

			$compileProvider.debugInfoEnabled(false);

			$stateProvider
			.state("developer", {
				url: "/developer",
				templateUrl: "templates/main/developer.html",
				controller: "DeveloperController"
			})
			.state("photographer", {
				url: "/photographer",
				templateUrl: "templates/main/photographer.html",
				controller: "PhotographerController"
			})
			.state("demo-photoshoot", {
				url: "/demo-photoshoot",
				templateUrl: "templates/photoshoots/demo-photoshoot.html",
				controller: "PhotographerController"
			})
			.state("demo-project", {
				url: "/demo-project",
				templateUrl: "templates/projects/demo-project.html",
				controller: "DeveloperController"
			})
			.state("demo-project-two", {
				url: "/demo-project-two",
				templateUrl: "templates/projects/demo-project-two.html",
				controller: "DeveloperController"
			});

			$urlRouterProvider.otherwise("/developer");

			/* Uncomment the below, as well as the base href in index.html, to use HTML5 pathing
			(without the /#/) on your particular webpage */
			// $locationProvider.html5Mode({
			// 	enabled: true,
			// 	requireBase: true
			// });
		});
})();
