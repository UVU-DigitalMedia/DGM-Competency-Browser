module.exports = {
  jshint: {
    files: ['Gruntfile.js', 'app/js/*.js'],
    options: {
      jshintrc: true,
      globals: {
        jQuery: true
      }
    }
  }
};
