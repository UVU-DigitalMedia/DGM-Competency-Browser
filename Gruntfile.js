module.exports = function(grunt) {

'use strict';

  require('load-grunt-config')(grunt);

  // Define tasks
  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('watch', ['browserSync']);
  grunt.registerTask('build', [
    'concat',
    'sass',
    'useminPrepare',
/*    'concat:generated',
    'cssmin:generated',
    'uglify:generated',
    'filerev',*/
    'rename',
    'usemin'
  ]);



};
