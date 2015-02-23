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
    watch: {
      scss2less:{
        files: ['less/**/*.less', 'less/_partials/**/*.less'],
        tasks: ['scss2less:dist']
      },
      less2stylus: {
        files: ['stylus/**/*.styl','stylus/_partials/**/*.styl'],
        tasks: ['less2stylus:dist']
      },
      livereload:{
        files: ['*.html', '*.php', 'js/**/*.{js,json}', 'less/*.less', 'stylus/*.styl', 'img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
        options: {
          livereload: true
        }
      }
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
    less2stylus: {
      files: 'less/main.less'
    }
  });
  grunt.registerTask('default', ['scss2less:dist', 'less2stylus', 'watch']);
  grunt.loadNpmTasks('load-grunt-tasks');
  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-scss2less');
  grunt.loadNpmTasks('grunt-contrib-watch');
};