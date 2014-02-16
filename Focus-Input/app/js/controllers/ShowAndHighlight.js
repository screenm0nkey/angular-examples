"use strict";

eventsApp.controller('ShowAndHighlight', function ($scope) {
  $scope.show = function(aShow){
    $scope.showMenu = !aShow;
    $scope.text = aShow ? 'show' : 'hide';
  };

  $scope.show(true);

  // below is an example using $watch
  $scope.myVar = 1;

  $scope.$watch('myVar', function() {
    console.log('hey, myVar has changed!');
  });

  $scope.buttonClicked = function() {
     $scope.myVar = 2; // This will trigger $watch expression to kick in
  };
});