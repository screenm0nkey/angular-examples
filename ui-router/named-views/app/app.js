"use strict";

var app = angular.module('ui-router-named-views', [
  'ui-router-named-views.alt-one',
  'ui-router-named-views.alt-two',
  'ui-router-named-views.alt-three',
  'egghead-banner',
  'blink',
  'ui.router',
  'ngRoute'
]);

app.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider.state('app', {
      url: '/home',
      views: {
        'header': {
          templateUrl: 'app/common/header.tpl.html'
        },
        'sidebar': {
          templateUrl: 'app/common/sidebar.tpl.html',
          controller : 'ListCtrl'
        },
        'content': {
          templateUrl: 'app/common/content.tpl.html'
        },
        'footer': {
          templateUrl: 'app/common/footer.tpl.html'
        }
      }
    });

    $urlRouterProvider.otherwise('/home');
  });


  // $route, routeParams
  app.controller("ListCtrl", function($scope, $location,  $stateParams) {
    $scope.items = ['one', 'two', 'three'];

    $scope.selected = $location.path().replace('/alt-', '');

    $scope.selectme = function (item) {
      $scope.selected = item;
    }
  });

