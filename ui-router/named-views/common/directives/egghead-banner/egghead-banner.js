angular.module('egghead-banner', [])
  .directive('eggheadBanner', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'common/directives/egghead-banner/egghead-banner.tpl.html',
      scope: {
        title: '@'
      }
    }
  })
;
