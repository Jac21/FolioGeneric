(function() {
	angular
		.module('folioGenericApp')
		.controller('PhotographerController', ['$scope', '$location', '$anchorScroll',
			function($scope, $location, $anchorScroll) {
				// set page class
				$scope.pageClass = 'photographer';

				// image data array
				$scope.images = [
					{
						"caption":"Demo Photo",
						"url":"dist/images/photographer/photos/demo-photo-one.jpg",
						"alt":"Demo Photo One"
					},
					{
						"caption":"Demo Photo",
						"url":"dist/images/photographer/photos/demo-photo-two.jpg",
						"alt":"Demo Photo Two"
					},
					{
						"caption":"Demo Photo",
						"url":"dist/images/photographer/photos/demo-photo-three.jpeg",
						"alt":"Demo Photo Three"
					},
					{
						"caption":"Demo Photo",
						"url":"dist/images/photographer/photos/demo-photo-four.jpeg",
						"alt":"Demo Photo Four"
					}
				];
				
				// utility function for linking between views
				$scope.go = function ( path ) {
				  $location.path( path );
				};

				// utility function to set viewport to the top of the page on element click
				$scope.backToTop = function() {
					$anchorScroll();
				};
			}
		]);
})();