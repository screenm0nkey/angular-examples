"use strict";
/* so the build file won't contain any of the files which are being lazy loaded as that's being
* dealt with using the dependencyResolverFor.js */
require.config({
    baseUrl: '/js',
    paths: {
        'angular': '../bower_components/angular/angular',
        'angular-route': '../bower_components/angular-route/angular-route',
        'bootstrap': '../lib/bootstrap/js/bootstrap',
        'jquery': '../bower_components/jquery/dist/jquery'
    },
    // the libs above won't be added to the build.js unless they are listed in the 'deps'
    shim: {
        'app': {
            deps: ['jquery', 'angular', 'angular-route', 'bootstrap']
        },
        'angular-route': {
            deps: ['angular']
        },
        'bootstrap': {
            deps: ['jquery']
        }
    }
});
// requiring 'app' will resolve to /js/app.js
require(['app'], function (app) {
        app.init();
    }
);