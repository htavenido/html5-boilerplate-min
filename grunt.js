/*global module:false*/
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            css: {
                src: ['css/src/normalize.css','css/src/main.css'],
                dest: "css/all.css"
            }
        }
    });

    grunt.loadNpmTasks("grunt-css");
    grunt.registerTask("default", "concat");
};
