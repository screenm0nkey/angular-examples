'use strict';

eventsApp.directive('upvote', function() {
    return {
        restrict: 'E',
        templateUrl: '/templates/directives/upvote.html',
        replace: true,
        scope: {
            upvote: "&",   // function. 'upvote' matches the attribute used
            stickitdownem: "&downvote", // function
            sprout: "=count"     // object property
        }
    };
});
