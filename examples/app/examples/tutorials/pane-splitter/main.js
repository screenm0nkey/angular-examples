(function (angular) {
  "use strict";

  var app = angular.module('bgDirectives'),
      globalDefaults = {
        html    : '',
        top     : 40,
        left    : 100,
        pane1   : 'split-pane1',
        pane2   : 'split-pane2',
        handler : 'split-handler',
        panes   : 'panes-container',
        pane    : 'pane-container',
        close   : 'close-pane'
      };


  app.provider('bgCloseHorizontal', function () {
    var defaults = angular.copy(globalDefaults);

    defaults.html += '<div class="close-pane">';
    defaults.html += '<span ng-click="closePane($event)" class="close-left">&lt;</span>';
    defaults.html += '<span ng-click="closePane($event)" class="close-reset">C</span>';
    defaults.html += '<span ng-click="closePane($event)" class="close-right">&gt;</span>';
    defaults.html += '</div>';

    this.setDefaults = function (obj) {
      angular.extend(angular.copy(defaults), obj);
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
            var $target = $(e.target),
                $ps = $('#pane-splitter'),
                $panesContainer = $ps.find('.' + defaults.panes),
                $handler = $ps.find('.'+defaults.handler),
                $left = $($panesContainer[0]),
                $right = $($panesContainer[1]);

            if ($target.hasClass('close-reset')) {
              $left.removeAttr('style');
              $right.removeAttr('style');
              $handler.removeAttr('style');
              return
            }

            var pos = ($target.hasClass('close-left') ? defaults.left : $window.innerWidth - defaults.left) + 'px';

            $left.css('width', pos);
            $right.css('left', pos);
            $handler.css('left', pos);


          };
        }
      };
    };
  });


  app.provider('bgCloseVerticle', function () {
    var defaults = angular.copy(globalDefaults);

    defaults.html += '<div class="close-pane">';
    defaults.html += '<span ng-click="closePane($event)">{{paneOpen ? "C" : "O"}}</span>';
    defaults.html += '<div>';

    this.setDefaults = function (obj) {
      angular.extend(angular.copy(defaults), obj);
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
                $target = $(e.target).closest('.close-pane'),
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

  app.directive('bgCloseV', function (bgCloseVerticle) {
    return bgCloseVerticle;
  });

  app.directive('bgCloseH', function (bgCloseHorizontal) {
    return bgCloseHorizontal;
  });



}(window.angular));