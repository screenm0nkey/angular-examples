'use strict';

eventsApp.directive('gravatar', function(gravatarUrlBuilder) {
 return {
   restrict: 'E',
   template: '<img />',
   replace: true,
   link: function(scope, element, attrs, controller) {
     attrs.$observe('email', function(newValue, oldValue) {
       if (newValue !== oldValue) {
         attrs.$set('src', gravatarUrlBuilder.buildGravatarUrl(newValue));
       }
     });
   }
 }
});

eventsApp.directive('snicker', function(gravatarUrlBuilder) {
 return {
   restrict: 'E',
   template: '<h1/>',
   replace: true,
   link: function(scope, element, attrs, controller) {
     attrs.$observe('someattr', function(newValue, oldValue) {
       if (newValue !== oldValue) {
         attrs.$set('src', gravatarUrlBuilder.buildGravatarUrl(newValue));
         element.text(newValue);
       }
     });
   }
 }
});

