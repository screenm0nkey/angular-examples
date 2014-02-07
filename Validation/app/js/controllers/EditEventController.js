'use strict';

eventsApp.controller('EditEventController',
    function EditEventController($scope) {

        $scope.sa = /\d\d\/\d\d\/\d\d\d\d/;

        $scope.saveEvent = function(event, newEventForm) {
            debugger;
            console.log(newEventForm);
            if(newEventForm.$valid) {
                window.alert('event ' + event.name + ' saved!');
            }
        };

        $scope.cancelEdit = function() {
            window.location = "/EventDetails.html";
        }
    }
);