module.exports = function(config) {
	config.set({
		/* basePath is used to build the path to the app's files in require i.e. '/base/app/bower_components/angular/angular' becomes
		 '../app/bower_components/angular/angular'. noode uses the karma config to find the files and add watchers
		*/
		basePath: '../',
		frameworks: ['jasmine', 'requirejs'],
		// "included". Should the files be included in the browser using <script> tag? Use false if you wanna load them manually, eg. using Require.js.
		files: [
			{pattern: 'app/js/*.js', included: false},
			{pattern: 'app/js/**/*.js', included: false},
			{pattern: 'test/unit.js', included: false},
			{pattern: 'test/unit/*.js', included: false},
			{pattern: 'test/unit/**/*.js', included: false},
			{pattern: 'app/bower_components/**/*.js', included: false},
			{pattern: 'app/lib/**/*.js', included: false},
			// main-test.js needs to be last as it's here that we use requirejs to load the files
			// http://karma-runner.github.io/0.10/plus/requirejs.html
			'test/main-test.js'
	],

	autoWatch: true,

	LogLevel: config.LOG_DEBUG,

	browsers: ['PhantomJS'], //Chrome Firefox

	junitReporter: {
		outputFile: 'test_out/unit.xml',
		suite: 'unit'
	}
	});
};
