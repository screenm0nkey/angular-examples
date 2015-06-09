inject(function(){})

module('some-module');
module(function(){});

beforeEach(function(){})
afterEach(function(){})

it("inject into spec", inject(function($rootScope) {}));


// this...
module('somemodule');
module(function($provide){
    $provide.value('someservice', {})
});
// ...is the same as this...
module('somemodule', function($provide){
    $provide.value('someservice', {})
});



describe('some', function(){
    var $rootScope;

    beforeEach(function(){
        module('somemodule');

        module(function($provide){
            $provide.value('someservice', {})
        })

        inject(function(_$rootScope_, _$httpBackend_) {})
    }
}


// create directive
    createDirective function (){
        var scope = $rootScope.$new();
        var element = angular.element("<test></test>");
        template = $compile(element)($scope);
        scope.$digest();
    }


// access controller in directive
    beforeEach(inject(function($rootScope, $compile) {
        $scope = $rootScope.$new();
        var element = angular.element("<test></test>");
        template = $compile(element)($scope);
        $scope.$digest();
        var controller = element.controller;
    }));


// find isolate scope in directive. find element inside directive and get scope
    it('test isolate scope', function () {
        var isolateScope = $directive.find('.some-class').scope();
        expect(isolateScope.nick).toBe(10);
    })



    beforeEach(function () {
        pathExtractor = {
            extract: sinon.spy(function (url) {
                return  url;
            })
        };

        module(function ($provide) {
            $provide.value('pathExtractor', pathExtractor);
            $provide.value('endpoints', endpoints);
            $provide.value('$upload', {});
        });
        module('drmDashboard.fixtures');
        module('drmDashboard.documents');

        inject(function (_documentsService_, _$httpBackend_, _documentsFixtures_) {
            documentsService = _documentsService_;
            $httpBackend = _$httpBackend_;
            documentsFixtures = _documentsFixtures_;
        });
    });



    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });


    beforeEach(module(function ($provide) {
        $provide.value('$location', {
            path : locationSpy
        });
        $provide.value('toastr', {
            error :toastrSpy
        });
    }));


    beforeEach( function () {
        inject(function (_authorisationService_, _$httpBackend_, _$injector_, _endpoints_, _endpointsFixtures_, _$rootScope_) {
            authorisationService = _authorisationService_;
            $httpBackend = _$httpBackend_;
            $injector =_$injector_;
            endpoints = _endpoints_;
            endpointsFixtures = _endpointsFixtures_;
            $rootScope = _$rootScope_;
            $rootScope.user = {};
        });
    });
