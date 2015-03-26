module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
      ]
    },
    scss2less: {
      options: {
        sourceMap: 'none'
      },
      dist: {
        files: {
          'less/main.less': 'sass/main.scss'
        }
      }
    }
  });
  grunt.registerTask('default', ['scss2less:dist']);
  grunt.loadNpmTasks('grunt-scss2less');
  grunt.loadNpmTasks('grunt-contrib-watch');
};