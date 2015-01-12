var $root = $('[ng-app]'),
    data = $root.data();

if (data && data.$scope) {
    (function f(scope) {
        console.log(scope.$id);
        console.log(scope);

        if (scope.$$nextSibling) {
            f(scope.$$nextSibling)
        } else {
            if (scope.$$childHead) {
                f(scope.$$childHead);
            }
        }
    }(data.$scope));
}