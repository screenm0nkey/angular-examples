define(['app'], function(app) {
    app.directive('appColor', ['$rootScope', function($rootScope) {
            return function(scope, $element, attrs) {
                $element.css({'color': attrs.appColor});
            };
        }
    ]);
});