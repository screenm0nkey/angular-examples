(function (angular) {
  'use strict';

  var gap = angular.module('GalleryModule', ['ngAnimate', 'ngTouch', 'ngResource']);
  // this allows us to put the promise omnto the scope like it was data object
  gap.config(function ($parseProvider) {
    $parseProvider.unwrapPromises(true);
  });

  gap.factory('eventDataService', function ($resource, $q, $timeout) {
    return {
      getDeferredData : function () {
        var deferred = $q.defer();

        $timeout(function () {
          deferred.resolve([
            {src: 'http://farm9.staticflickr.com/8042/7918423710_e6dd168d7c_b.jpg', desc: 'Image 01'},
            {src: 'http://farm9.staticflickr.com/8449/7918424278_4835c85e7a_b.jpg', desc: 'Image 02'},
            {src: 'http://farm9.staticflickr.com/8457/7918424412_bb641455c7_b.jpg', desc: 'Image 03'},
            {src: 'http://farm9.staticflickr.com/8179/7918424842_c79f7e345c_b.jpg', desc: 'Image 04'},
            {src: 'http://farm9.staticflickr.com/8315/7918425138_b739f0df53_b.jpg', desc: 'Image 05'},
            {src: 'http://farm9.staticflickr.com/8461/7918425364_fe6753aa75_b.jpg', desc: 'Image 06'}
            ]);
        }, 1000);

        return deferred.promise;
      }
    };
  });


  gap.directive('gallery', ['eventDataService', function(eventDataService) {
    return {
     restrict: 'E',
     replace: true,
     scope : {},
     templateUrl: 'template.html',
     controller: function($scope) {
      $scope.photos = eventDataService.getDeferredData();

          // initial image index
          $scope._Index = 0;

          // if a current image is the same as requested image
          $scope.isActive = function (index) {
            return $scope._Index === index;
          };

          // show prev image
          $scope.showPrev = function () {
            $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.photos.length - 1;
          };

          // show next image
          $scope.showNext = function () {
            $scope._Index = ($scope._Index < $scope.photos.length - 1) ? ++$scope._Index : 0;
          };

          // show a certain image
          $scope.showPhoto = function (index) {
            $scope._Index = index;
          };
        }
      };
    }]);


}(window.angular));