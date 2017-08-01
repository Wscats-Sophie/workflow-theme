module.exports = function (grunt) {
    grunt.initConfig({
        cssmin: {
            dist: {
                files: {
                    'dist/css/workflow-theme.min.css': ['dist/css/workflow-theme.css']
                }
            }
        },
        concat: {
            dist: {
                src: ['js/modal.js', 'js/bootstrap-datepicker.js'],
                dest: 'dist/js/workflow-theme.js',
            },
        },
        uglify: {
            dist: {
                files: {
                    ['dist/js/workflow-theme.min.js']: 'dist/js/workflow-theme.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['cssmin:dist', 'concat:dist', 'uglify:dist']);
}