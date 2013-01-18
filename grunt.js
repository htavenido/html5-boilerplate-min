/*global module:false*/
module.exports = function (grunt) {
    var SRC_CSS = "./css/src",
        BUILD_CSS = "./css/";

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            css: {
                src: this.SRC_CSS + "*.css",
                dest: "css/all.css"
            }
        },
        cssmin: {
            css: {
                src: "<config:concat.css.dest>",
                dest: "css/all-min.css"
            }
        },
        csslint: {
            base_theme: {
                src: "css/all-min.css",
                rules: {
                    "import": false,
                    "overqualified-elements": 2
                }
            }
        },
        watch: {
            files: "css/src/*.css",
            tasks: ["concat", "cssmin"]
        }
    });

    grunt.loadNpmTasks("grunt-css");
    grunt.registerTask("default", "concat cssmin");
};
