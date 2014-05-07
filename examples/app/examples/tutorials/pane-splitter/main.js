(function (angular) {
  "use strict";

  var app = angular.module('app', ['bgDirectives']);

  app.run(function ($rootScope, $log) {
   $rootScope.$log = $log;
  });

  app.provider('bgClose', function () {
    var defaults = {
      top : 40,
      html : '<h4 ng-click="closePane($event)" class="close-me">{{paneOpen ? "Close" : "Open"}}</h4>'
    };

    this.setDefaults = function (obj) {
      angular.extend(defaults, obj);
    };

    this.$get = function ($compile, $window) {
      return {
        restrict: 'A',
        require: '^bgSplitter',
        link: function(scope, element, attrs, bgSplitterCtrl) {
          var prevPos, cScope = scope.$new(),
              linkFn = $compile(defaults.html);

          cScope.paneOpen = true;
          element.append(linkFn(cScope));

          cScope.closePane = function (e) {
            var pos,
                $target = $(e.target),
                $container = $target.closest('[orientation]'),
                $paneCont = $target.closest('.pane-container'),
                $pane1 = $container.find('.split-pane1'),
                $pane2 = $container.find('.split-pane2'),
                $handler = $container.find('.split-handler');

            //  store the pane postion before the pane is closed.
            if (cScope.paneOpen) {
              prevPos = $handler.css('top');
            }

            if (!cScope.paneOpen && !!$paneCont.attr('style')) {
              pos = prevPos;
            } else {
              pos = ($paneCont.hasClass('split-pane1') ? defaults.top :
                $window.innerHeight - defaults.top) + 'px';
            }

            cScope.paneOpen = !cScope.paneOpen;
            $pane1.css('height', pos);
            $pane2.css('top', pos);
            $handler.css('top', pos);
          };
        }
      };
    };
  });

  app.directive('bgClose', function (bgClose) {
    return bgClose;
  });

  // configure the defaults for the directive
  app.config(function (bgCloseProvider) {
    bgCloseProvider.setDefaults({
      top : 100
    });
  });

}(window.angular));