'use strict';

define(['angular', 'services'], function(angular, services) {

	/* Directives */
	angular.module('myApp.directives', ['myApp.services'])
		.directive('appVersion', ['version', function(version) {
			debugger
			return function(scope, elm, attrs) {
				elm.text(version);
		};
	}]);
});
