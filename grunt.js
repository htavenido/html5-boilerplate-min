/*global module:false*/
module.exports = function (grunt) {
    var SRC_CSS = "./css/src",
        BUILD_CSS = "./css/";

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            css: {
                src: ["css/src/normalize.css",'css/src/main.css'],
                dest: "css/all.css"
            }
        },
        csslint: {
            base_theme: {
                src: "css/all.min.css",
                rules: {
                    "import": false,
                    "overqualified-elements": 2
                }
            }
        },
        watch: {
            files: "css/src/*.css",
            tasks: ["concat"]
        }
    });

    grunt.loadNpmTasks("grunt-css");
    grunt.registerTask("default", "concat");
};
