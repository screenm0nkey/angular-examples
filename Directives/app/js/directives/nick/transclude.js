 'use strict';

eventsApp.controller('TestMeController', ['$scope',
  function TestMeController($scope) {
    $scope.count = 0;
  }]);

eventsApp.directive('transcludio', function() {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    template: "<h1>umm{{count}} <div ng-transclude></div></h1>",
    controller: "TestMeController",
    link: {
      post: function(scope, element, attrs, controller) {
        scope.count++;
      }
    }
  };
});