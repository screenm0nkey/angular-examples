/*

This file is not currently used as the tests are called directly in main-test.js but if you do want to use this setup
and then add code below to main-test.js and remove the "if (/spec\.js$/i.test(file)) {"

 if (/unit\.js$/.test(file)) {
 	tests.push(file);
 }
*/

define([
		'/base/test/unit/filtersSpec.js',
		'/base/test/unit/controllersSpec.js',
		'/base/test/unit/directivesSpec.js',
		'/base/test/unit/servicesSpec.js'
	], function() {
		console.log('all tests loaded!');
});