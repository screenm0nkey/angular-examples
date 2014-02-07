'use strict';

var app = angular.module('Loading_Demo', []);

app.service('rssFeedList', function($q, $rootScope, $timeout) {
  this.get = function(url) {
    debugger
    var d = $q.defer();
      $timeout(function(result) { // simulate AJAX call
        result = { // override result for demo
          feedList: [
          'http://feeds.feedburner.com/TEDTalks_video',
          'http://feeds.nationalgeographic.com/ng/photography/photo-of-the-day/',
          'http://sfbay.craigslist.org/eng/index.rss',
          'http://www.slate.com/blogs/trending.fulltext.all.10.rss',
          'http://feeds.current.com/homepage/en_US.rss',
          'http://feeds.current.com/items/popular.rss',
          'http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml'
          ]
        };
        $rootScope.$apply(d.resolve(result));
      }, 2000);
      return d.promise;
    };
  });

app.directive('repeatDone', function() {
  return function(scope, element, attrs) {
      if (scope.$last) { // all are rendered
        scope.$eval(attrs.repeatDone);
      }
    };
  });

app.filter('strip_http', function() {
  return function(str) {
    var http = "http://";
    return (str.indexOf(http) === 0) ? str.substr(http.length) : str;
  };
});

app.filter('hostName', function() {
  return function(url) {
    var urlParser = document.createElement('a');
    urlParser.href = url;
    return urlParser.hostname;
  };
});

app.controller('AppCtrl', function($scope, $timeout, rssFeedList) {

  $scope.setLoading = function(loading) {
    $scope.isLoading = loading;
  };

  $scope.layoutDone = function() {
    $scope.setLoading(false);
      $timeout(function() { $('a[data-toggle="tooltip"]').tooltip(); }, 0); // wait...
    };

    $scope.loadFeed = function(url) {
      $scope.setLoading(true);
      rssFeedList.get(url).then(function(result) {
        if (result.error) {
          window.alert("ERROR " + result.error.code + ": " + result.error.message + "\nurl: " + url);
          $scope.setLoading(false);
        }
        else {
          $scope.feedList = result.feedList;
          if ($scope.feedList.length === 0) {
            $scope.setLoading(false);
          }
        }
      });
    };

    $scope.loadFeed();
  });
