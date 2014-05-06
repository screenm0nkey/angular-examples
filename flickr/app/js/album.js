(function() {
  var app = angular.module('Album', ['ui', 'ngRoute', 'ngResource']);

  app.constant('SEARCH', {
    term : 'dublin',
    perPage : 12
  });

  app.config(function($routeProvider, $locationProvider, SEARCH) {

    $routeProvider.when('/pages/:search_term/:page', {
      templateUrl: 'partials/listing.html',
      controller: 'AlbumController',
      controllerAs : 'albumCtrl',
      resolve: {
        // 'photos' object can be injected in other functions. it's a like declaring a constant
        photoz: function ($q, $route, $timeout, $http, $location) {
          var deferred = $q.defer(),
          params = {
            method: 'flickr.photos.search',
            api_key: '2bb0b524a3e3cbb9ceaea74b30dabf93',
            text: $route.current.params.search_term || localStorage.getItem('search_term') || SEARCH.term,
            per_page: SEARCH.perPage,
            format: 'json',
            page: $route.current.params.page || 1,
            jsoncallback: 'JSON_CALLBACK'
          };

          var xhr = $http.jsonp('http://api.flickr.com/services/rest/', {
            params: params
          });

          xhr.success(function(data, status, headers, config) {
            var page_info, photos;

            page_info = {
              page : data.photos.page,
              pages : data.photos.pages,
            };
            // go back to first page if current is great than all the pages
            if (parseInt($route.current.params.page, 10) > page_info.pages) {
              $location.path("/pages/1/" + $route.current.params.search_term);
            }

            photos = _.map(data.photos.photo, function(photo) {
              return {
                title: photo.title,
                thumb_src: "http://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_s.jpg",
                src: "http://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + ".jpg"
              };
            });

            return deferred.resolve([page_info, photos]);
          });
          // you have to return a promise when using resolve
          return deferred.promise;
        }
      }
    });

    $routeProvider.otherwise({
      redirectTo: "/pages/" + (localStorage.getItem('search_term') || SEARCH.term) + "/1"
    });


  });



}).call(this);
