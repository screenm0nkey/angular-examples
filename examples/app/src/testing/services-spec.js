describe('security', function () {

    var $rootScope, $http, $httpBackend, mockService;

    angular.module('test', []).constant('I18N.MESSAGES', data = {});

    beforeEach(module('somemodule', 'test', 'some.tpl.html'));

    beforeEach(module(function ($provide) {
        mockService = sinon.stub({
            method1: sinon.spy(),
            method2: sinon.spy()
        });
        $provide.value('SomeService', mockService);
    }));

    beforeEach(inject(function (_$rootScope_, _$httpBackend_, _$http_) {
        $rootScope = _$rootScope_;
        $httpBackend = _$httpBackend_;
        $http = _$http_;
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    var service;
    beforeEach(inject(function ($injector) {
        service = $injector.get('security');
    }));

    describe('showLogin', function () {
        it("should open the dialog", function () {
            service.showLogin();
            $rootScope.$digest();
            expect(angular.element('.login-form').length).toBeGreaterThan(0);
        });
    });

    describe('login', function () {
        it('calls queue.retry on a successful login', function () {
            $httpBackend.when('POST', '/login').respond(200, {user: userInfo});
            var spy = sinon.spy();
            service.methodname().then(spy);
            $httpBackend.flush();
            expect(spy.toHaveBeenCalled).toBeTrue();
            expect(spy.args[0][0])({user: userInfo});
        });


        it('sends a http request to login the specified user', function () {
            $httpBackend.when('POST', '/login').respond(200, {user: userInfo});
            $httpBackend.expect('POST', '/login');
            service.login('email', 'password');
            $httpBackend.flush();
            $rootScope.$digest();
            expect(service.currentUser).toBe(userInfo);
        });


        it('does not call queue.retryAll after a login failure', function () {
            $httpBackend.when('POST', '/login').respond(200, {user: null});
            spyOn(queue, 'retryAll');
            expect(queue.retryAll).not.toHaveBeenCalled();
            service.login('email', 'password');
            $httpBackend.flush();
            expect(queue.retryAll).not.toHaveBeenCalled();
        });

        it('returns true to success handlers if the user authenticated', function () {
            $httpBackend.when('POST', '/login').respond(200, {user: userInfo});
            service.login('email', 'password').then(function (loggedIn) {
                expect(loggedIn).toBe(true);
            });
            $httpBackend.flush();
        });

        it('returns false to success handlers if the user was not authenticated', function () {
            $httpBackend.when('POST', '/login').respond(200, {user: undefined});
            service.login('email', 'password').then(function (loggedIn) {
                expect(loggedIn).toBe(false);
            });
            $httpBackend.flush();
        });
    });


});