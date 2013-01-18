module.exports = function(grunt) {
    var SRC_CSS = 'css', BUILD_CSS = 'css/';
    grunt.initConfig({
        concat: {
            css: {
                src: [SRC_CSS] + 'css/*.css',
                dest: BUILD_CSS + 'css/all.css'
            }
        },
        cssmin: {
            my_target: {
                src: '<config:concat.css.dest>',
                dest: BUILD_CSS + 'css/all.min.css'
            }
        }
    });
    grunt.loadNpmTasks('grunt-css');
};
