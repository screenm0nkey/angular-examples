'use strict';

define(['angular', 'services', 'sampleAmdPlugin', 'samplePlugin'], function(angular) {
	/* Directives */
	angular.module('myApp.directives', ['myApp.services'])
		.directive('appVersion', ['version', function(version) {
			return function link(scope, $elm) {
				$elm.myLovelyAmdPlugin({bgColor:'red'});
				$elm.parent().myNotSoLovelyPlugin({bgColor:'green'});
				$elm.text(version);
		};
	}]);
});
