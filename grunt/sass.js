module.exports = {
  sass: {
    dist: {
      files: [{
        expand: true,
        src: ['app/css/*.scss'],
        dest: '',
        ext: '.css'
      }]
    }
  }
};
