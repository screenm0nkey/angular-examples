'use strict';

eventsApp.controller('EventDetailsController',
  function EventDetailsController($scope, $route) {
    $scope.uid = "EVENTDETAILSCONTROLLER";
    $scope.sortorder = 'name';
    $scope.whatson = $route.current.locals.event;
    $scope.query = "";

    $scope.upVoteSession = function(manny) {
      manny.upVoteCount++;
    };

    $scope.downVoteSession = function(manny) {
      manny.upVoteCount--;
    };

    $scope.print = function () {
          // console.log(12, $scope);
    };
});
