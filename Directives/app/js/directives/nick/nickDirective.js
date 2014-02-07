'use strict';

eventsApp.directive('cmdSampleOne', function($compile) {
  return {
    restrict: 'C',
    template: "<input type='text' ng-model='sampleData' /> {{sampleData}}<br/>",
    // without the isolate scope the two way binding will be with the parent
    // controller's $scope
    scope : {}
  };
});

eventsApp.directive('cmdSampleTwo', function($compile) {
  return {
    restrict: 'E',
    link : function ($scope, element, attrs, controller) {
      // this is just for compile example and shouldn't be done like this
      var markup = "<input type='text' ng-model='sampleData' /> {{sampleData}}<br/>";
      angular.element(element).html($compile(markup)($scope));
    }
  };
});