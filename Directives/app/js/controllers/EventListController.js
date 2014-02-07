'use strict';

eventsApp.controller('EventListController', ['$scope', 'eventData',
    function EventListController($scope, eventData) {
        $scope.events = eventData.getAllEvents();

        $scope.events.then(function (data) {
          debugger
        });

        $scope.print = function (event) {
          console.log(11, event);
        };
    }
]);

