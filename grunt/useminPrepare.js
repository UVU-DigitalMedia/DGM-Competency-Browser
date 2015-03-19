module.exports = {
  useminPrepare: {
    html: 'index.html',
    concat: {
      generated: {
        files: [
          {
            dest: '.tmp/concat/js/app.js',
            src: [
              'app/prod/js/production.js',
            ]
          }
        ]
      }
    },
    uglify: {
      generated: {
        files: [
          {
            dest: 'dist/js/app.js',
            src: [ '.tmp/concat/js/app.js' ]
          }
        ]
      }
    },
    cssmin: {
      generated: {
        files: [
          {
            dest: 'dist/css/app.csss',
            src: [ '.tmp/concat/css/app.scss' ]
          }
        ]
      }
    }
  }
};
