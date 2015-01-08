'use strict';

define(['angular', 'services', 'sampleAmdPlugin'], function(angular) {
	/* Directives */
	angular.module('myApp.directives', ['myApp.services'])
		.directive('appVersion', ['version', function(version) {
			return function link(scope, $elm) {
				$elm.myLovelyAmdPlugin({bgColor:'red'});
				$elm.text(version);
		};
	}]);
});
