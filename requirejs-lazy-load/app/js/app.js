'use strict';

define(function(require) {
//nick
  var routes = require('routes');
  var dependencyResolverFor = require('services/dependencyResolverFor');
  var app = angular.module('app', ['ngRoute']);
  
  app.init = function () {
    angular.bootstrap(document, ['app']);
  };

  app.config([
    '$routeProvider',
    '$locationProvider',
    '$controllerProvider',
    '$compileProvider',
    '$filterProvider',
    '$provide',

    function($routeProvider, $locationProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {
      app.controller = $controllerProvider.register;
      app.directive= $compileProvider.directive;
      app.filter = $filterProvider.register;
      app.factory= $provide.factory;
      app.service= $provide.service;

      $locationProvider.html5Mode(true);

      if(routes.routes !== undefined) {
        angular.forEach(routes.routes, function(route, path) {
          $routeProvider.when(path, {
            templateUrl:route.templateUrl,
            resolve: dependencyResolverFor(route.dependencies)
          });
        });
      }

      if(routes.defaultRoutePaths !== undefined){
        $routeProvider.otherwise({redirectTo:routes.defaultRoutePaths});
      }
    }
    ]);

  return app;
});