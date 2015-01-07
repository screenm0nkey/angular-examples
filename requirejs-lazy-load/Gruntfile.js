module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            options: {
                mangle: false,
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'app/js/app.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },

        watch : {
            files : ['Gruntfile.js', 'app/js/main.js'],
            tasks : ['requirejs']
        },


        requirejs: {
            /* these settings are merged with the config settings in 'app/js/main.js' */
            compile: {
                options: {
                    uglify2: {
                        mangle: true
                    },
                    preserveLicenseComments: false,
                    keepBuildDir: false,
                    generateSourceMaps:true,
                    baseUrl: "app/js",
                    /* 'mainConfigFile' setting seems to stop the need for putting path and shim information into this config */
                    mainConfigFile: "app/js/main.js",
                    name: 'main', // this needs to be the same as the app/js/main.js
                    out: "app/js/build.js",
                    optimize: 'uglify2'
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    // Default task(s).
    grunt.registerTask('default', ['uglify']);

};