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
        closeto : 'close-top',
        closebo : 'close-bottom',
        closele : 'close-left',
        closeri : 'close-right',
        closere : 'close-reset'
      };


  app.provider('bgCloseHorizontal', function () {
    var defaults = angular.copy(globalDefaults);

    defaults.html += '<div class="close-pane">';
    defaults.html += '<span ng-click="closePane($event)" class="glyphicon glyphicon-arrow-left '+defaults.closele+'"></span>';
    defaults.html += '<span ng-click="closePane($event)" class="glyphicon glyphicon-stop '+defaults.closere+'"></span>';
    defaults.html += '<span ng-click="closePane($event)" class="glyphicon glyphicon-arrow-right '+defaults.closeri+'"></span>';
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

          cScope.closePane = function (e) {
            var $target = $(e.target),
                $ps = $(defaults.id),
                $panesContainer = $ps.find('.' + defaults.panes),
                $handler = $ps.find('.'+defaults.handler),
                $left = $($panesContainer[0]),
                $right = $($panesContainer[1]);

            $target.closest('.'+defaults.close).find('[ng-click]').removeAttr('disabled');

            if ($target.hasClass(defaults.closere)) {
              $left.removeAttr('style');
              $right.removeAttr('style');
              $handler.removeAttr('style');
              return;
            }

            var pos = ($target.hasClass(defaults.closele) ? defaults.left :
              $window.innerWidth - defaults.left) + 'px';


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
    defaults.html += '<span ng-click="closePane($event)" class="glyphicon glyphicon-arrow-up '+defaults.closeto+'"></span>';
    defaults.html += '<span ng-click="closePane($event)" class="glyphicon glyphicon-stop '+defaults.closere+'"></span>';
    defaults.html += '<span ng-click="closePane($event)" class="glyphicon glyphicon-arrow-down '+defaults.closebo+'"></span>';
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

            $panesContainer.find('[ng-click]').removeAttr('disabled');

            if ($target.hasClass(defaults.closere)) {
              $pane1.removeAttr('style');
              $pane2.removeAttr('style');
              $handler.removeAttr('style');
              return;
            }

            // removeDisabled($panesContainer);

            if ($target.hasClass(defaults.closeto)) {
              $panesContainer.find('.'+defaults.closeto).attr('disabled', 'disabled');
              pos = defaults.top + 'px';
            }

            if ($target.hasClass(defaults.closebo)) {
              $panesContainer.find('.'+defaults.closebo).attr('disabled', 'disabled');
              pos = $window.innerHeight - defaults.top + 'px';
            }

            // $target.attr('disabled', 'disabled');

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