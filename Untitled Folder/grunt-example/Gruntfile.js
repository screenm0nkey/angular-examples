/**
 * Created by nick on 16/01/15.
 */
module.exports = function (grunt) {

    grunt.initConfig({
        clean: ["clean-stuff/*.*"],
        hello : {
            options : {
                msg : 'go away!'
            },
            opts : {
                src: ["clean-stuff/*.*"]
            }

        }
    });

    grunt.loadTasks('tasks');
    // Load npm installed tasks
    grunt.loadNpmTasks('grunt-contrib-clean');
    // Your entry point task flows
    grunt.registerTask('default', function(){

    });
}