angular.element(document).injector().invoke(function(FormDataStoreService) {
  FormDataStoreService.clear()
});


angular.injector().annotate(MyController)