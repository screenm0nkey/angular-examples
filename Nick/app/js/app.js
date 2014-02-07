'use strict';

window.eventsApp = angular.module('eventsApp', ['ngRoute', 'ngResource']);

eventsApp.config(function ($routeProvider, $locationProvider) {
  $routeProvider.when('/showandhighlight', {
    templateUrl:'templates/showAndHighlight.html',
    controller: 'ShowAndHighlight'
  });

  // $routeProvider.otherwise({redirectTo: '/showandhighlight'});
  $locationProvider.html5Mode(true);
});


