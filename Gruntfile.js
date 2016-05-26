/**
 * Created by Michal on 5/25/16.
 */
module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    'public/stylesheets/style.css': 'public/sass/style.scss'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.registerTask('default', ['sass']);
};