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


  app.directive('focusWatch', ['$timeout', function ($timeout) {
    return function link (scope, element, attrs) {
      scope.$watch(attrs.focusWatch, function (newVal, oldVal) {
        var action = newVal ? 'focus' : 'blur';

        $timeout(function() {
          element[0][action]();
        });
      });
    };
  }]);

  //  this is the same as above but uses a watcher
  app.directive('focusObserve', ['$timeout', function ($timeout) {
    return function link (scope, element, attrs) {
        // you can also observe attributes inside the 'link' function of a directive
        // attrs.$observe('someattr', function(newValue, oldValue) {});
        attrs.$observe('show', function (value) {
          var action = value === 'true' ? 'focus' : 'blur';

          $timeout(function() {
            element[0][action]();
          });
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
    // this is when the controller first loads set text to 'Show Menu'
    $scope.show(true);
  });

}());