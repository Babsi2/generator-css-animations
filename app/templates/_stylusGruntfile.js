module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'tasks/*.js',
      ]
    },
    scss2stylus: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'stylus/main.styl': 'sass/main.scss'
        }
      }
    },
    autoprefixer: {
      no_dest: {
        src: 'stylus/main.styl'
      },
    }
  });
  grunt.registerTask('default', ['scss2stylus', 'autoprefixer']);
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadTasks('tasks');
};