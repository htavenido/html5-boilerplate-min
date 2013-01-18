module.exports = function(grunt) {
    var SRC_CSS = 'css', BUILD_CSS = 'css/';
    grunt.initConfig({
        csslint: {
            base_css: {
                src: '',
                rules: {
                    'import': false,
                    
                }
            }
        },
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

    // default task
    grunt.registerTask('default', 'csslint concat cssmin');
};
