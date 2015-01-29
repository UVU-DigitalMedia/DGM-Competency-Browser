module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    concat: {
      dist: {
          src: [
          'css/*.css', // All CSS in the libs folder
          'js/*.js' //All javascript
          ],
          dest:[
          'css/build/production.css',
           'js/build/production.js'
           ]
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
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Default task(s).
  grunt.registerTask('default', ['jshint']);

};
