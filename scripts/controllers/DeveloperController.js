(function() {
  "use strict";

  angular // eslint-disable-line no-undef
    .module("folioGenericApp")
    .controller("DeveloperController", [
      "$scope",
      "$location",
      "$anchorScroll",
      function($scope, $location, $anchorScroll) {
        // set page class
        $scope.pageClass = "developer";

        // utility function for linking between views
        $scope.go = function(path) {
          $location.path(path);
        };

        // page specific objects
        $scope.developerHeadshot = {
          url: "dist/images/developer/headshot-dev.png",
          alt: "developer headshot"
        };

        $scope.ghostButtonLink = {
          url: "#"
        };

        $scope.projectSectionHeaderText = "Selection of Projects";
        $scope.presentationSectionHeaderText = "Talks and Presentations";

        $scope.fabButtonLinks = {
          email: "#",
          file: "#",
          github: "#",
          linkedin: "#"
        };

        // utility function to add active css class to target element
        $scope.activate = function(event) {
          $(event.target).addClass("active"); // eslint-disable-line no-undef
        };

        // utility function to set viewport to the top of the page
        // on element click
        $scope.backToTop = function() {
          $anchorScroll();
        };

        // initialize FAB
        var elem = document.querySelector(".fixed-action-btn");

        var instance = M.FloatingActionButton.init(elem, {
          direction: "left",
          hoverEnabled: false
        });
      }
    ]);
})();
