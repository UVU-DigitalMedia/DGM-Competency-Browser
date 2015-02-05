module.exports = function(grunt) {

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
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>', 'app/css/*.css' ],
      tasks: ['jshint', 'concat']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Default task(s).
  grunt.registerTask('default', ['jshint']);

};
