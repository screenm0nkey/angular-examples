'use strict';

eventsApp.directive('collapsible', function() {
  return {
    restrict: 'E',
    replace: true,
    template: '<div><h4 class="well-title" ng-click="toggleVisibility()">{{title}}</h4><div ng-show="visible" ng-transclude></div> </div>',
    controller: function($scope) {
      $scope.uid = "COLLAPSIBLE DIRECTIVE";
      $scope.visible = true;

      $scope.toggleVisibility = function () {
        $scope.visible = !$scope.visible;
      };
      // logs the scope for this directive's controller
      console.log($scope);
      // logs the scope for the ng-repeat directive's controller as the
      // collapsible directive is used within ng-repeat
      console.log($scope.$parent);
      // logs the scope for the event detail controller
      console.log($scope.$parent.$parent, '\n\n');
    },
    transclude: true,
    scope: {
      title: '@'
    }
  };
});








