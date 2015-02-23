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
    watch: {
      scss2less:{
        files: ['less/**/*.less', 'less/_partials/**/*.less'],
        tasks: ['scss2less:dist']
      },
      livereload:{
        files: ['*.html', '*.php', 'js/**/*.{js,json}', 'less/*.less', 'img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
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
  });
  grunt.registerTask('default', ['scss2less:dist', 'watch']);
  grunt.loadNpmTasks('grunt-scss2less');
  grunt.loadNpmTasks('grunt-contrib-watch');
};