module.exports = {
  browserSync: {
    dev: {
      bsFiles: {
        src : 'app/**/*'
      },
      options: {
        proxy: 'localhost:8080'
      }
    }
  }
};
