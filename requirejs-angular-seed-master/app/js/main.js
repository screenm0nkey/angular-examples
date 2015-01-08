'use strict';

require.config({
	paths: {
		jquery : '../lib/jquery1.112.min',
		angular: '../bower_components/angular/angular',
		angularRoute: '../bower_components/angular-route/angular-route',
		angularMocks: '../bower_components/angular-mocks/angular-mocks',
		text: '../bower_components/requirejs-text/text',
		samplePlugin : '../lib/sample-jquery-plugin',
		sampleAmdPlugin : '../lib/sample-amd-jquery-plugin'
	},
	shim: {
		'angular' : {
			deps:['jquery'],
			exports : 'angular'
		},
		'angularRoute': ['angular'],
		'angularMocks': {
			deps:['angular'],
			exports :'angular.mock'
		},
		// so you don't have to shim this as it will still load when required
		// as a dependency in any of the other modules. but it's good practise to.
		samplePlugin : {
			deps : ['jquery']
		}
	},
	priority: [
		'jquery',
		"angular"
	]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = "NG_DEFER_BOOTSTRAP!";

require( [
	'angular',
	'app',
	'routes'
], function(angular, app, routes) {
	angular.element().ready(function() {
		angular.resumeBootstrap([app['name']]);
	});
});
