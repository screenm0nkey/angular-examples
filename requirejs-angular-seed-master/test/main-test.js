/* 	we get all the JS files here inc libraries and and then filter it so we are only left with our tests.
	the array will end up something like [/base/test/unit/controllersSpec.js]

	All the files listed in karma.conf's 'files' properties will be added to window.__karma__.files, even if they are 'included: false'
*/
var tests = [];
for (var file in window.__karma__.files) {
	if (window.__karma__.files.hasOwnProperty(file)) {
		if (/spec\.js$/i.test(file)) {
			//console.log('Adding test ', file);
			tests.push(file);
		}
	}
}

/*
  Tests array =
 [ "/base/test/unit/controllersSpec.js"
   "/base/test/unit/directivesSpec.js"
   "/base/test/unit/filtersSpec.js"
   "/base/test/unit/servicesSpec.js" ]
* */

require.config({
	baseUrl: '/base/app/js',
	paths: {
		jquery : '/base/app/lib/jquery1.112.min',
		angular: '/base/app/bower_components/angular/angular',
		angularRoute: '/base/app/bower_components/angular-route/angular-route',
		angularMocks: '/base/app/bower_components/angular-mocks/angular-mocks',
		text: '/base/app/bower_components/requirejs-text/text',
		fixtures: '/base/test/unit/fixtures',
		samplePlugin : '/base/app/lib/sample-jquery-plugin',
		sampleAmdPlugin : '/base/app/lib/sample-amd-jquery-plugin'
	},
	shim: {
		angular : {
			deps:['jquery'],
			exports : 'angular'
		},
		'angularRoute': ['angular'],
		'angularMocks': {
			deps:['angular'],
			'exports':'angular.mock'
		},
		samplePlugin : {
			deps : ['jquery']
		}
	},
	deps: tests,
	callback: window.__karma__.start
});
