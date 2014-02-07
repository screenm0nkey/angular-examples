'use strict';

window.eventsApp = angular.module('eventsApp', ['ngResource'])
.config(function ($routeProvider, $locationProvider) {

  $routeProvider.when('/nick', {
    templateUrl:'templates/nick.html',
    controller: 'NickController'
  });

  // homepage
  $routeProvider.when('/events', {
    templateUrl: 'templates/EventList.html',
    controller: 'EventListController'
  });

  $routeProvider.when('/newEvent', {
    templateUrl:'templates/NewEvent.html',
    controller: 'EditEventController'
  });

  $routeProvider.when('/event/:eventId', {
    templateUrl: '/templates/EventDetails.html',
    controller: 'EventDetailsController',
    resolve: {
      event: function($q, $route, eventData) {
        var deferred = $q.defer();
        eventData.getEvent($route.current.pathParams.eventId)
        .then(function(event) { deferred.resolve(event); });
        return deferred.promise;
      }
    }
  });

  $routeProvider.when('/sampleDirective',
  {
    templateUrl: 'templates/SampleDirective.html',
    controller: 'SampleDirectiveController'
  });

  $routeProvider.otherwise({redirectTo: '/events'});
  $locationProvider.html5Mode(true);
});


