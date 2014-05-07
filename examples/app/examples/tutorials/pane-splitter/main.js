(function (angular) {
  "use strict";

  var app = angular.module('bgDirectives'),
      globalDefaults = {
        html    : '',
        top     : 40,
        left    : 100,
        id      : '#pane-splitter',
        pane1   : 'split-pane1',
        pane2   : 'split-pane2',
        handler : 'split-handler',
        panes   : 'panes-container',
        pane    : 'pane-container',
        close   : 'close-pane',
        closet  : 'close-top',
        closeb  : 'close-bottom',
        closel  : 'close-left',
        closer  : 'close-right',
        closere : 'close-reset'
      };


  app.provider('bgCloseHorizontal', function () {
    var defaults = angular.copy(globalDefaults);

    defaults.html += '<div class="close-pane">';
    defaults.html += '<span ng-click="closePane($event)" class="'+defaults.closel+'">&larr;</span>';
    defaults.html += '<span ng-click="closePane($event)" class="'+defaults.closere+'">R</span>';
    defaults.html += '<span ng-click="closePane($event)" class="'+defaults.closer+'">&rarr;</span>';
    defaults.html += '</div>';

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

          function removeDisabled ($target) {
            $target.closest('.'+defaults.close).find('[class^="close-"]').removeAttr('disabled');
          }

          cScope.closePane = function (e) {
            var $target = $(e.target),
                $ps = $(defaults.id),
                $panesContainer = $ps.find('.' + defaults.panes),
                $handler = $ps.find('.'+defaults.handler),
                $left = $($panesContainer[0]),
                $right = $($panesContainer[1]);

            if ($target.hasClass(defaults.closere)) {
              $left.removeAttr('style');
              $right.removeAttr('style');
              $handler.removeAttr('style');
              removeDisabled($target);
              return;
            }

            var pos = ($target.hasClass(defaults.closel) ? defaults.left :
              $window.innerWidth - defaults.left) + 'px';

            removeDisabled($target);
            $target.attr('disabled', 'disabled');

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
    defaults.html += '<span ng-click="closePane($event)" class="'+defaults.closet+'">&uarr;</span>';
    defaults.html += '<span ng-click="closePane($event)" class="'+defaults.closere+'">R</span>';
    defaults.html += '<span ng-click="closePane($event)" class="'+defaults.closeb+'">&darr;</span>';
    defaults.html += '<div>';

    this.setDefaults = function (obj) {
      angular.extend(defaults, obj);
    };

    this.$get = function ($compile, $window) {
      return {
        restrict: 'A',
        require: '^bgSplitter',
        link: function(scope, element, attrs, bgSplitterCtrl) {
          var cScope = scope.$new(),
              $el = $compile(defaults.html)(cScope);

          function removeDisabled ($target) {
            $target.closest('.'+defaults.close).find('[class^="close-"]').removeAttr('disabled');
          }

          cScope.paneOpen = true;
          element.append($el);

          cScope.closePane = function (e) {
            var pos,
                $target = $(e.target),
                $panesContainer = $target.closest('.' + defaults.panes),
                $pane1 = $panesContainer.find('.' + defaults.pane1),
                $pane2 = $panesContainer.find('.' + defaults.pane2),
                $handler = $panesContainer.find('.' + defaults.handler);

            if ($target.attr('disabled')) {
              return;
            }

            if ($target.hasClass(defaults.closere)) {
              $pane1.removeAttr('style');
              $pane2.removeAttr('style');
              $handler.removeAttr('style');
              removeDisabled($target);
              return;
            }

            if ($target.hasClass(defaults.closet)) {
              pos = defaults.top + 'px';
            }

            if ($target.hasClass(defaults.closeb)) {
              pos = $window.innerHeight - defaults.top + 'px';
            }

            removeDisabled($target);
            $target.attr('disabled', 'disabled');

            $pane1.css('height', pos);
            $pane2.css('top', pos);
            $handler.css('top', pos);
          };
        }
      };
    };
  });

  // directive for adding verticle panel buttons
  app.directive('bgCloseV', function (bgCloseVerticle) {
    return bgCloseVerticle;
  });

  // directive for adding horizontal panel buttons
  app.directive('bgCloseH', function (bgCloseHorizontal) {
    return bgCloseHorizontal;
  });

}(window.angular));