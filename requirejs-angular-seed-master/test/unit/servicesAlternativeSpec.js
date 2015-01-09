/*global describe beforeEach it expect */

define([
	'angular',
	'angularMocks',
	'app'
], function(angular, mocks, app) {
	'use strict';

	var version;

	ddescribe('service', function() {
		beforeEach(mocks.module('myApp.services'));

		beforeEach(inject(function (_version_) {
			version = _version_;
		}));

		describe('version', function() {
			it('should return current version', function() {
				expect(version).toEqual('0.1');
			});
		});
	});
});