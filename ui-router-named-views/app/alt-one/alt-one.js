angular.module('ui-router-named-views.alt-one', [
    'ui.router'
  ])
  .config(function ($stateProvider) {
    $stateProvider
      .state('app.alt-one', {
        url: 'alt-one',
        views: {
          'content@': {
            templateUrl: 'app/alt-one/alt-one.content.tpl.html'
          }
        }
      })
    ;
  })
;
