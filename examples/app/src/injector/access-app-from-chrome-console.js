// read this first https://www.ng-book.com/p/Debugging-AngularJS/

angular.element(domElement).scope() //to get the current scope for the element
angular.element(domElement).injector() //to get the current app injector
angular.element(domElement).controller() //to get a hold of the ng-controller

//Keep in mind that any changes to the angular model or any method invocations on the scope need to be wrapped in $apply() like this:
$scope.$apply(function(){
    // perform any model changes or method invocations here on angular app.
});

//example
angular.element(document.body).injector().get('serviceName')