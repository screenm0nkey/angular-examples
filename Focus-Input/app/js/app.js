(function () {
  'use strict';

  var app = angular.module('app', ['ngRoute', 'ngResource']);

  app.config(function ($routeProvider, $locationProvider) {
    $routeProvider.when('/showandhighlight', {
      templateUrl:'templates/showAndHighlight.html',
      controller: 'ShowAndHighlightCtrl'
    });

    $routeProvider.otherwise({redirectTo: '/showandhighlight'});
    $locationProvider.html5Mode(true);
  });


  app.directive('focusIf', ['$timeout', function ($timeout) {
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

  // initial caps
  app.filter('initial', function () {
    return function (val) {
      return val.charAt(0).toUpperCase() + val.slice(1);
    };
  });



  app.controller('ShowAndHighlightCtrl', function ($scope) {
    $scope.show = function(aShow){
      $scope.showMenu = !aShow;
      $scope.text = aShow ? 'show' : 'hide';
    };
    $scope.show(true);
  });

}());