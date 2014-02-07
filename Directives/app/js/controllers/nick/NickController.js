'use strict';

eventsApp.controller('NickController', ['$scope', function NickController($scope) {
    $scope.print = function () {
      console.log($scope);
    };
}]);