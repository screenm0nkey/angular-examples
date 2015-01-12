"use stict";

var app = angular.module('app', []);

app.controller('MainCtrl', function ($scope) {
    $scope.addItem = function () {
        $scope.collapseData.push({
            title: $scope.title,
            content: $scope.content,
            collapsed: false
        });

        $scope.title = '';
        $scope.content = '';
    };

    $scope.collapseData = [
        {
            title: "Collapse Group Item Title 1",
            content: "Lorem ipsum dolor sit amet, consectetuer some more text.",
            collapsed: false
        },
        {
            title: "Collapse Group Item Title 2",
            content: "Lorem ipsum dolor sit amet, consectetuer some more text.",
            collapsed: false
        },
        {
            title: "Collapse Group Item Title 2",
            content: "Lorem ipsum dolor sit amet, consectetuer some more text.",
            collapsed: false
        }];
});


app.directive('customPopover', function () {
    return {
        restrict: 'A',
        template: '<span>{{label}}</span>',
        link: function (scope, el, attrs) {
            scope.label = attrs.popoverLabel;
            $(el).popover({
                trigger: 'click',
                html: true,
                content: attrs.popoverHtml,
                placement: attrs.popoverPlacement
            });
        }
    };
});

app.directive('customAccordion', function () {
    return {
        scope: {
            ngModel: '='
        },
        restrict: 'A',
        templateUrl: 'tmpl.html',
        link: function (scope, el, attrs) {
            scope.panelBaseId = attrs.collapsePanelBodyId;
            scope.panelId = attrs.collapsePanelId;

            $(document).ready(function () {
                angular.forEach(scope.ngModel, function (value, key) {
                    console.log("#" + scope.panelBaseId + "-" + key)
                    if (value.collapsed) {
                        $("#" + scope.panelBaseId + "-" + key).collapse('show');
                    }
                });
            });

            scope.toggleCollapsedStates = function (ind) {
                angular.forEach(scope.ngModel, function (value, key) {
                    if (key === ind) {
                        scope.ngModel[key].collapsed = !scope.ngModel[key].collapsed;
                        $("#" + scope.panelBaseId + "-" + ind).collapse('toggle');
                    }
                    else {
                        scope.ngModel[key].collapsed = false;
                    }
                });
            };
        }
    };
});

