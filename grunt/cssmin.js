module.exports = {
  cssmin: {
    target: {
      files: [{
        expand: true,
        src: ['app/css*.css', '!*.min.css'],
        dest: 'production/prod',
        ext: '.min.css'
      }]
    }
  }
};
