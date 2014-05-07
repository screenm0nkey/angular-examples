(function (angular) {
  "use strict";

  var app = angular.module('app', ['bgDirectives']);

  app.run(function ($rootScope, $log) {
   $rootScope.$log = $log;
  });

  app.provider('bgClose', function () {
    var defaults = {
      top     : 40,
      html    : '<h5 ng-click="closePane($event)" class="close-pane">{{paneOpen ? "Close" : "Open"}}</h5>',
      pane1   : 'split-pane1',
      pane2   : 'split-pane2',
      handler : 'split-handler',
      panes   : 'panes-container',
      pane    : 'pane-container',
      close   : 'close-pane'
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
              $el = $compile(defaults.html)(cScope);

          cScope.paneOpen = true;
          element.append($el);

          cScope.closePane = function (e) {
            var pos, len, other,
                $target = $(e.target),
                $panesContainer = $target.closest('.' + defaults.panes),
                $paneContainer = $target.closest('.' + defaults.pane),
                $pane1 = $panesContainer.find('.' + defaults.pane1),
                $pane2 = $panesContainer.find('.' + defaults.pane2),
                $handler = $panesContainer.find('.' + defaults.handler);

            if ($target.attr('disabled')) {
              return;
            }

            len = $panesContainer.find('.' + defaults.pane).length;
            other = $paneContainer.hasClass(defaults.pane1) ? ('.'+defaults.pane2) : ('.' + defaults.pane1);

            // These are split verticle panes
            if (len === 2) {
              var $other = $panesContainer.find(other + ' .' + defaults.close);

              //  store the pane postion before the pane is closed.
              if (cScope.paneOpen) {
                prevPos = $handler.css('top');
                $other.attr('disabled', 'disabled');
              } else {
                $other.removeAttr('disabled');
              }

              // calculate the postion of the window
              if (!cScope.paneOpen && !!$paneContainer.attr('style')) {
                pos = prevPos;
              } else {
                pos = ($paneContainer.hasClass(defaults.pane1) ? defaults.top :
                  $window.innerHeight - defaults.top) + 'px';
              }

              cScope.paneOpen = !cScope.paneOpen;
              $pane1.css('height', pos);
              $pane2.css('top', pos);
              $handler.css('top', pos);
            }
          };
        }
      };
    };
  });

  app.directive('bgClose', function (bgClose) {
    return bgClose;
  });

  // configure the defaults for the close button provider, which is used for the
  // directive
  app.config(function (bgCloseProvider) {
    bgCloseProvider.setDefaults({
      top : 50
    });
  });

}(window.angular));