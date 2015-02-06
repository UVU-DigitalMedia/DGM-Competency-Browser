module.exports = function(grunt) {
'use strict';

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    concat: {
      distJS: {
          src: 'app/js/*.js', //All javascript
          dest: 'app/prod/js/production.js'
        },
      distCSS: {
          src: 'app/css/*.css', // All CSS in the libs folder,
          dest: 'app/prod/css/production.css'
        }
    },

    jshint: {
      files: ['Gruntfile.js', 'app/js/*.js'],
      options: {
        jshintrc: true,
        globals: {
          jQuery: true
        }
      }
    },

    sass: {
       dist: {
         files: [{
           expand: true,
           src: ['app/css/*.scss'],
           dest: '',
           ext: '.css'
         }]
       }
     },

    watch: {
      files: ['<%= jshint.files %>', 'app/css/*.scss' ],
      tasks: ['sass', 'concat', 'jshint']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
  grunt.registerTask('default', ['jshint']);

};
