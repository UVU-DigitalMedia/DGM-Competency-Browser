module.exports = {
  browserSync: {
    dev: {
      files: '/app/*.html',
      options: {
        proxy: 'http://localhost:8080/'
      }
    }
  }
};
