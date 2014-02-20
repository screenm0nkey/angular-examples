//http://www.yearofmoo.com/2012/10/more-angularjs-magic-to-supercharge-your-webapp.html#angularjs-and-internet-explorer

$routeProvider.when('/404',{
  controller : ErrorCtrl
});

$routeProvider.otherwise({
  redirectTo : '/404'
});

App.run(['$rootScope','$location',function($rootScope, $location) {
  $rootScope.$on("$routeChangeError", function (event, current, previous, rejection) {
    //change this code to handle the error somehow
    $location.path('/404').replace();
  });
}]);