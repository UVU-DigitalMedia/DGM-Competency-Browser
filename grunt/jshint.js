module.exports = {
  jshint: {
    files: { src: ['Gruntfile.js', 'app/js/*.js'] },
    options: {
      jshintrc: true,
      globals: {
        jQuery: true
      }
    }
  }
};
