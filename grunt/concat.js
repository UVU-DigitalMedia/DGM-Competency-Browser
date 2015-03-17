module.exports = {
  concat: {
    distJS: {
      src: 'app/js/*.js', //All javascript
      dest: 'app/prod/js/production.js'
    },
    distCSS: {
      src: 'app/css/*.scss', // All CSS in the libs folder,
      dest: 'app/prod/css/production.scss'
    }
  }
};
