"use strict";

/* Embedded Fragment - controller */
function DemoController($scope) {
  $scope.name = 'DemoController';
   $scope.user = {
    dateOfBirth: new Date(2014, 10, 11)
  };
}

angular.module("demo", []).directive('myDatepicker', function ($parse) {
  return {
    restrict: "E",
    replace: true,
    transclude: false,
    compile: function (element, attrs) {
      // attrs.ngModel =user.dateOfBirth
     var modelAccessor = $parse(attrs.ngModel);
     var html = "<input type='text' id='" + attrs.id + "'></input>";
     var newElem = $(html);
     element.replaceWith(newElem);
     //  cant use template as...
     // http://stackoverflow.com/questions/8378563/why-cant-i-change-the-type-of-an-input-element-to-submit

    return function link (scope, element, attrs, controller) {
      var processChange = function () {
        var date = new Date(element.datepicker("getDate"));

        scope.$apply(function (scope) {
          modelAccessor.assign(scope, date);
        });
      };

      element.datepicker({
         inline: true,
         onClose: processChange,
         onSelect: processChange
      });

       scope.$watch(modelAccessor, function (val) {
         var date = new Date(val);
         element.datepicker("setDate", date);
       });
      };
    }
};
});
