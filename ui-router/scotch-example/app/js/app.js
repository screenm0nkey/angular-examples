var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/home');
    $locationProvider.html5Mode(true);

    $stateProvider
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: '/partials/partial-home.html'
        })

        // nested list with custom controller
        .state('home.list', {
            url: '/list', //home/list
            templateUrl: '/partials/partial-home-list.html',
            controller: function ($scope) {
                $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
            }
        })

        // nested list with just some random string data
        .state('home.paragraph', {
            url: '/paragraph', //home/paragraph
            template: 'I could sure use a drink right now.'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('abooot', {
            url: '/about',
            views: {
                '': {
                    templateUrl: '/partials/partial-about.html'
                },
                // ui-view="columnOne"
                'columnOne@abooot': {
                    template: '<h2>Look I am a column!</h2>'
                },
                // ui-view="columnTwo"
                'columnTwo@abooot': {
                    templateUrl: '/partials/table-data.html',
                    controller: 'scotchController'
                }
            }
        });
});

routerApp.controller('scotchController', function ($scope) {
    $scope.message = 'test';
    $scope.scotches = [{
        name: 'Macallan 12',
        price: 50
    }, {
        name: 'Chivas Regal Royal Salute',
        price: 10000
    }, {
        name: 'Glenfiddich 1937',
        price: 20000
    }];
});