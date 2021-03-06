angular.element(document).injector().invoke(function (FormDataStoreService) {
    FormDataStoreService.clear()
});



// get the injectable paramter names
angular.injector().annotate(function ($http) {});


// get a service
angular.element(document).injector().get('BasketService')

// inject a filter
angular.element(document).injector().invoke(function ($filter) {
    return $filter('stripPostcodeFilter')('fsdfsdf, de220hu')
});

// get one of angulars default services from the ng module
var myInjector = angular.injector(["ng"]);
var $http = myInjector.get("$http");


var myInjector = angular.injector(["ng"]);
myInjector.invoke(function ($http) {
    debugger
});


// i want to access the Baseket service but it has the followind dependacnies
// bbModule.factory "BasketService", ($q, $rootScope, BBModel)
// so we also have to pass in the modules 'BB.Models', 'ng' as thats where
// the other services live i.e. the service 'BBModel' is in the module 'BB.Models'
// and $q and $rootscope are part of 'ng' module
angular.injector(['BB.Services', 'BB.Models', 'ng']).get('BasketService')





