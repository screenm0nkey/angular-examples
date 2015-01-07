module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },

        requirejs: {
            /* these settings are merged with the config settings in 'app/js/main.js' */
            compile: {
                options: {
                    uglify2: {
                        mangle: false
                    },
                    preserveLicenseComments: false,
                    generateSourceMaps:true,
                    baseUrl: "app/js",
                    mainConfigFile: "app/js/main.js",
                    name: 'main',
                    out: "app/js/build.js",
                    optimize: 'none'
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    // Default task(s).
    grunt.registerTask('default', ['uglify']);

};