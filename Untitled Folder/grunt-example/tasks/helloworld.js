module.exports = function(grunt) {
    "use strict";

    //see http://gruntjs.com/api/inside-tasks for more help

    grunt.registerMultiTask('hello', 'test task', function() {
        // options are any object in the initCOnfig which has the name options i.e.
        // {options : {a:1}}
        var options = this.options();

        // this.data gets the config object from initConfig
        grunt.log.write(options.msg +'\n');
        grunt.log.write(this.data.src +'\n');

        // all files listed in the initConfig will be converted to files and accessed via
        // this.files and this.fileSrc
        this.filesSrc.forEach(function(filepath) {
            grunt.log.write(filepath);
        });
    });
};