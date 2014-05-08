
$location.absUrl();
$location.protocol();
$location.port();
$location.host();
$location.path();
$location.search();
$location.hash();
$location.url();

// To keep track of the URL when it changes, you will need to setup a polling event.
scope.$watch('$location.path', function() { closeMenu(); });

$scope.$on('$locationChangeStart', function(event, newUrl) {
  alert('new location');
});

// http://stackoverflow.com/questions/15093916/angularjs-watch-on-location-search-doesnt-work-when-reloadonsearch-is-false
$scope.$on('$routeUpdate', function(){
  $scope.sort = $location.search().sort;
  $scope.order = $location.search().order;
  $scope.offset = $location.search().offset;
});


// Broadcasts
// ************
// $locationChangeStart
// $locationChangeSuccess

// $routeUpdate
// $routeChangeStart
// $routeChangeSuccess
// $routeChangeError

// $destroy <- broadcast when a scope is destroyed

// Emits
// **************
// $includeContentLoaded
// $viewContentLoaded