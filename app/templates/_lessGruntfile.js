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
    },
    autoprefixer: {
      no_dest: {
        src: 'less/main.less'
      },
    }
  });
  grunt.registerTask('default', ['scss2less:dist', 'autoprefixer']);
  grunt.loadNpmTasks('grunt-scss2less');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');
};