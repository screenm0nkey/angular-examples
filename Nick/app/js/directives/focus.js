"use strict";

eventsApp.directive('focusIf', ['$timeout', function ($timeout) {
  return function focusIf(scope, element, attr) {
      // you can also observe attributes inside the 'link' function of a directive
      // attrs.$observe('someattr', function(newValue, oldValue) {});
      scope.$watch(attr.focusIf, function (newVal) {
        if (newVal) {
          $timeout(function() {
            element[0].focus();
          });
        }
      });
    };
  }]);