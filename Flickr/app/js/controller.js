(function () {

  angular.module('Album').controller('AlbumController',
  function ($scope, $location, $routeParams, SEARCH, photoz) {
    var self = this;

    $scope.photos = photoz[1];
    $scope.page = photoz[0].page;
    $scope.pages = photoz[0].pages;
    $scope.end = $scope.page * SEARCH.perPage;
    $scope.start = $scope.end - (SEARCH.perPage - 1);
    $scope.search_term = $routeParams.search_term;
    $scope.q = $scope.search_term;

    self.set_current_photo = function(photo) {
      $scope.title = photo.title;
      $scope.current_photo = photo;
      return $scope.current_photo;
    };

    $scope.search = function() {
      localStorage.setItem('search_term', $scope.q);
      return $location.path("pages/" + $scope.q + "/1");
    };

    self.next_page = function() {
      if ($scope.page >= $scope.pages) {
        return;
      }
      $location.path("pages/" + $scope.search_term + "/" + ($scope.page + 1));
    };

    self.prev_page = function() {
      if ($scope.page <= 1) {
        return;
      }
      $location.path("pages/" + $scope.search_term + "/" + ($scope.page - 1));
    };

    self.next_photo = function() {
      var current_photo, next_photo;
      current_photo = $('.thumbnail.active');
      next_photo = current_photo.parent().next('li');
      if (next_photo.length) {
        return self.set_current_photo($scope.photos[$('.thumbnails li').index(next_photo)]);
      } else {
        return self.next_page();
      }
    };

    self.prev_photo = function() {
      var current_photo, prev_photo;
      current_photo = $('.thumbnail.active');
      prev_photo = current_photo.parent().prev('li');
      console.log(prev_photo);
      if (prev_photo.length) {
        return self.set_current_photo($scope.photos[$('.thumbnails li').index(prev_photo)]);
      } else {
        return self.prev_page();
      }
    };

    $scope.$on('$viewContentLoaded', function() {
      return $('#listing').focus();
    });

    self.set_current_photo(_.first($scope.photos));
  });

}());