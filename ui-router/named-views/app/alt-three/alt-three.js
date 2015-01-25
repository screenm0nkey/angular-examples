angular.module('ui-router-named-views.alt-three', [
    'ui.router'
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('app.alt-three', {
                url: '/alt-three',
                views: {
                    // as there is nothing after the @, it targets it's parent, which in this case is 'app'
                    'content@': {
                        templateUrl: 'app/alt-three/alt-three.content.tpl.html'
                    },
                    'header@': {
                        templateUrl: 'app/alt-three/alt-three.header.tpl.html'
                    },
                    // here we're telling it to look for named views within alt-three's own templates
                    'one@app.alt-three': {
                        template: '<div class="alert-info"><h1>Sub One</h1></div>'
                    },
                    'two@app.alt-three': {
                        template: '<div class="alert-success"><h1>Sub Two</h1></div>'
                    }
                }
            }
        )
    })
;
