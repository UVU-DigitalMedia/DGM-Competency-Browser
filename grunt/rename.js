module.exports = {
  rename: {
    moveJS: {
      src: 'app/prod/js/production.js',
      dest: 'production/prod.js'
    },
    moveCSS: {
      src: 'app/prod/css/production.scss',
      dest: 'production/prod.css',
    }
  }
};
