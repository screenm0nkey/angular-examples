exports.config = {
    allScriptsTimeout: 11000,

    specs: [
        '*.js'
    ],

    capabilities: {
        'browserName': 'firefox'
    },

    baseUrl: 'http://localhost:8000/',

    framework: 'jasmine',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    },

    /* onPrepare is normally used to deal with testing pages that need a login
    https://github.com/angular/protractor/blob/master/spec/withLoginConf.js */
    onPrepare: function() {
        // http://stackoverflow.com/questions/25596706/using-protractor-test-with-bootstrapped-angularjs
        browser.manage().timeouts().pageLoadTimeout(40000);
        browser.manage().timeouts().implicitlyWait(25000);
        browser.ignoreSynchronization = true;
    }
};