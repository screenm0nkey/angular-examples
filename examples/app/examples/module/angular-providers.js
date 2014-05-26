
  // this is taken from the angular lib. these are the default providers
  $provide.provider({
    // $compile is used for directives
    $compile : $compileProvider,
    $anchorScroll: $AnchorScrollProvider,
    $animate: $AnimateProvider,
    $browser: $BrowserProvider,
    $cacheFactory: $CacheFactoryProvider,
    $controller: $ControllerProvider,
    $document: $DocumentProvider,
    $exceptionHandler: $ExceptionHandlerProvider,
    $filter: $FilterProvider,
    $interpolate: $InterpolateProvider,
    $interval: $IntervalProvider,
    $http: $HttpProvider,
    $httpBackend: $HttpBackendProvider,
    $location: $LocationProvider,
    $log: $LogProvider,
    $parse: $ParseProvider,
    $rootScope: $RootScopeProvider,
    $q: $QProvider,
    $sce: $SceProvider,
    $sceDelegate: $SceDelegateProvider,
    $sniffer: $SnifferProvider,
    $templateCache: $TemplateCacheProvider,
    $timeout: $TimeoutProvider,
    $window: $WindowProvider
  });
