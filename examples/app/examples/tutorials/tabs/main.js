"use strict";

var customDirectives = angular.module('customDirectives', []);
customDirectives.directive('customTabs', function () {
  return {
    restrict: 'A',
    require: '?ngModel',
    scope:{
      ngModel: '='
    },
    templateUrl: 'template.html',
    link: function(scope, el, attrs){
      scope.contentBaseId = attrs.tabsBaseId;

      scope.toggleActive = function(ind){
        angular.forEach(scope.ngModel, function(value, key){
          if (key === ind) {
            scope.ngModel[key].active = !scope.ngModel[key].active;
            $("#" + scope.panelBaseId + "-" + ind).tab('show');
          }
          else {
            scope.ngModel[key].active = false;
          }
        });
      };
    }
  };
});

angular.module('CustomComponents', ['customDirectives']);

function CustomDirectivesController($scope, $http) {
  // this has to be on the window as it's a jsonp calledback. look at the request
  window.getTabs = function(data) {
    $scope.tabsData = data.tabs;
  };

  $scope.loadTabs = function(num) {
    $http.jsonp("http://subliminalsources.com/wp-content/uploads/2014/02/tabs" + num + ".js");
  };

  $scope.tabsData = [];
}