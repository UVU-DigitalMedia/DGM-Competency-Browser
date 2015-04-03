module.exports = function(grunt) {

'use strict';

  require('load-grunt-config')(grunt);

  grunt.initConfig({
  concat: {
    dist: {
      src: ['app/js/**/*.js', 'app/js/*.js'],
      dest: 'production/prod.js'
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
  csslint: {
    strict: {
      options: {
        import: 2
      },
      src: ['app/css/partials/_variables.scss']
    },
    lax: {
      options: {
        import: false
      },
      src: ['app/css/*.css']
    }
  },
  uglify: {
    my_target: {
      files: {
        'production/output.min.js': ['app/js/app.js']
      }
    }
  },
  cssmin: {
    target: {
      files: [{
        expand: true,
        src: ['app/css*.css', '!*.min.css'],
        dest: 'production/prod',
        ext: '.min.css'
      }]
    }
  },
  useminPrepare: {
    html: 'index.html'
  },
  usemin: {
  html: 'index.html',
  options: {
    blockReplacements: {
/*    css: function (block) {
          return '<link rel="stylesheet" href="' + block.dest + '">';
      },*/
      js: function (block) {
          return '<script src="'+ block.dest +'"></script>';
      }
    }
  }
}
});


  // Define tasks
  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('watch', ['browserSync']);
  grunt.registerTask('build', [
    'sass',
    'cssmin',
    'concat',
    'uglify',
    'usemin'
  ]);



};
