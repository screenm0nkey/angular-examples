angular.element(document).injector().invoke(function(FormDataStoreService) {
  FormDataStoreService.clear()
});

angular.injector().annotate(MyController)


angular.element(document).injector().invoke(function($filter) {
  debugger
});


// inject a Service
angular.element(document).injector().get('BasketService')

// inject a filter
angular.element(document).injector().invoke(function($filter){
  return $filter('stripPostcodeFilter')('fsdfsdf, de220hu')
})