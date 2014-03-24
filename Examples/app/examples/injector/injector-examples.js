angular.element(document).injector().invoke(function(FormDataStoreService) {
  FormDataStoreService.clear()
});

angular.injector().annotate(function($http){})


// inject a Service
angular.element(document).injector().get('BasketService')

// inject a filter
angular.element(document).injector().invoke(function($filter){
  return $filter('stripPostcodeFilter')('fsdfsdf, de220hu')
})