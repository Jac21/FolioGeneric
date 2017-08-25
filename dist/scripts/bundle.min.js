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

			// Uncomment the following to allow for HTML5 Mode and remove the Angular hash from the URL
			// Ensure associated configuration is also uncommented within index.html
			/*
			$locationProvider.html5Mode({
				enabled: true,
				requireBase: true
			});
			*/ 
		});
})();
