module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      sass: {
        files: ['sass/**/*.{scss,sass}','sass/_partials/**/*.{scss,sass}'],
        tasks: ['sass:dist']
      },
      scss2less:{
        files: ['less/**/*.less', 'less/_partials/**/*.less'],
        tasks: ['scss2less:dist']
      },
      less2stylus: {
        files: ['stylus/**/*.styl','stylus/_partials/**/*.styl'],
        tasks: ['less2stylus:dist']
      },
      livereload:{
        files: ['*.html', '*.php', 'js/**/*.{js,json}', 'css/*.css', 'less/*.less', 'stylus/*.styl', 'img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
        options: {
          livereload: true
        }
      }
    },
    sass: {
      options: {
        sourceMap: true,
        outputStyle: 'compressed'
      },
      dist: {
        files: {
          'css/main.css': 'sass/main.scss'
        }
      }
    },
    scss2less: {
      options: {
        sourceMap: true,
        outputStyle: 'compressed'
      },
      dist: {
        files: {
          'less/main.less': 'sass/main.scss'
        }
      }
    }
    less2stylus: {
      options: {
        sourceMap: true,
        outputStyle: 'compressed'
      },
    dist: {
      files: {
        'stylus/main.styl': 'less/main.less'
      }
    }
  }
  });
  grunt.registerTask('default', ['sass:dist', 'scss2less:dist', 'less2stylus:dist', 'watch']);
  grunt.loadNpmTasks('load-grunt-tasks');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-scss2less');
  grunt.loadNpmTasks('grunt-contrib-watch');
};