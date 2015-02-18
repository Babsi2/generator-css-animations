module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      sass: {
        files: ['sass/**/*.{scss,sass}','sass/_partials/**/*.{scss,sass}'],
        tasks: ['sass:dist']
      },
      sasslus:{
        files: ['stylus/**/*.styl', 'stylus/_partials/**/*.styl'],
        tasks: ['stylus:dist']
      },
      scss2less:{
        files: ['less/**/*.less', 'less/_partials/**/*.less'],
        tasks: ['less:dist']
      }
      livereload: {
        files: ['*.html', '*.php', 'js/**/*.{js,json}', 'css/*.css', 'stylus/*.styl', 'less/*.less', 'img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
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
    sasslus: {
      options: {
        sourceMap: true,
        outputStyle: 'compressed'
      },
      dist: {
        files: {
          'stylus/main.styl': 'sass/main.scss'
        }
      }
    }
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
  });
  grunt.registerTask('default', ['sass:dist', 'sasslus:dist', 'less:dist', 'watch']);
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
};