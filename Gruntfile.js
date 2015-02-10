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
    
    csslint: {
      strict: {
        options: {
          import: 2
        },
        src: ['app/css/*.css']
      },
      lax: {
        options: {
          import: false
        },
        src: ['app/css/*.css']
      }
    },

    // Copy Files
    copy: {

        // Copy Only Needed Bootstrap Files
        bootstrap: {
            expand: true,
            nonull: true,
            src: [
                'app/lib/bootstrap-sass/assets/stylesheets/bootstrap/_grid.scss',
                'app/lib/bootstrap-sass/assets/stylesheets/bootstrap/_mixins.scss',
                'app/lib/bootstrap-sass/assets/stylesheets/bootstrap/_variables.scss'
            ],
            dest: 'app/css/partials/bootstrap',
            flatten: true,
            filter: 'isFile'
        },

        // Copy Bootstrap Mixins
        bootstrapMixins: {
            expand: true,
            nonull: true,
            src: 'app/lib/bootstrap-sass/assets/stylesheets/bootstrap/mixins/*.scss',
            dest: 'app/css/partials/bootstrap/mixins',
            flatten: true,
            filter: 'isFile'
        },

        // Copy Font Awesome Fonts
        fonts: {
            expand: true,
            nonull: true,
            src: 'app/lib/font-awesome-sass/assets/fonts/**',
            dest: 'app/fonts',
            flatten: true,
            filter: 'isFile'
        },

        // Copy Font Awesome SASS
        fontawesomeSASS: {
            expand: true,
            nonull: true,
            src: 'app/lib/font-awesome-sass/assets/stylesheets/font-awesome/*.scss',
            dest: 'app/css/partials/fontawesome',
            flatten: true,
            filter: 'isFile'
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
      tasks: ['sass', 'concat', 'jshint', 'csslint']

    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['jshint']);

};
