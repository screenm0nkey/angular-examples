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

        copy: {
            build: {
                // cwd points to a directory the source files are relative to
                cwd: 'app',
                src: ['**'],
                dest: 'build/app',
                expand: true
            }
        },

        clean: {
            build: {
                src: [ 'build' ]
            },
            prepareBuild : {
                src: ['build/app/bower_components']
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
                    out: "app/build/main.js",
                    optimize: 'none'
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

    // Default task(s).
    grunt.registerTask('default', ['uglify']);
    grunt.registerTask('build', ['copy', 'requirejs', 'clean']);

};