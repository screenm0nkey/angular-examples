(function () {
    'use strict';

    angular.module('creditSalesLink')
        .config(configFunction)
        .run(runFunction);

    function configFunction($httpProvider, config, $provide, mocks) {
        if (!mocks.useMocks) {
            return;
        }

        console.log('Stubbing API');
        console.log('************');

        $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);

        var APIUrl = (config.API.protocol + '://' + config.API.host + ':' + mocks.port + config.API.path + '/');

        $httpProvider.interceptors.push(function ($q, $timeout, config, $log, $httpBackend) {

            function isApiCall(url){
                if (url.indexOf(".html") === -1 && url.length > 30 && url.substring(0,30) === '/spg/credit_sales_link/webapp/') {
                    return true;
                }
                return false;
            }

            function mockGet(url){
                var response = load(getUri(url) + '_GET');
                $httpBackend.whenGET(url).respond(function () {
                    return [response.status, response.mock];
                });
            }

            function mockPost(url){
                var response = load(getUri(url) + '_POST');
                $httpBackend.whenPOST(url).respond(function () {
                    return [response.status, response.mock];
                });
            }

            function getUri(url){
                url = stripQueryParams(url);
                return url.substring(30);
            }

            // strip the query string
            function stripQueryParams(url){
                var indexOfQueryParams = url.indexOf('?');
                if (indexOfQueryParams >= 0) {
                    return url.substring(0,indexOfQueryParams);
                }
                return url;
            }

            // loads the json files synchronously from the dev folder
            function load(path){
                var xhr = new XMLHttpRequest();
                xhr.open('GET', './dev/' + path + '.json', false);
                xhr.send();
                return angular.fromJson(xhr.response);
            }

            function buildFullUrl(config){
                var url = config.url;
                var params = '';
                for (var param in config.params) {
                    var value = config.params[param];
                    params += '&' + param + '=' + value;
                }
                if (params){
                    url += '?' + params.substring(1);
                }
                return url;
            }

            // it works by setting up the httpBackend on the request so it's ready for the response
            return {
                'request': function (config) {
                    $log.log('Requesting ' + config.url, config);

                    if (isApiCall(config.url)){
                        var url = buildFullUrl(config);
                        if (config.method === "GET") {
                            mockGet(url);
                        } else if (config.method === "POST"){
                            mockPost(url);
                        }
                    }
                    return config;
                },
                'response': function (response) {
                    var deferred = $q.defer();

                    //Only handle calls to the API
                    if (response.config.url.indexOf(APIUrl) !== 0) {
                        return response;
                    }

                    deferred.resolve(response);
                    return deferred.promise;
                }
            };
        });
    }

    function runFunction(config, mocks, $httpBackend, regexEscape) {
        if (!mocks.useMocks) {
            return;
        }

        function passThrough(url) {
            $httpBackend.whenGET(new RegExp(regexEscape(url))).passThrough();
        }

        passThrough(config.viewsDir);
        passThrough(config.componentsDir);
        passThrough(config.statesDir);
    }

}());