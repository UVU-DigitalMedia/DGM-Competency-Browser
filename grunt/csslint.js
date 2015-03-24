module.exports = {
  csslint: {
    strict: {
      options: {
        import: 2
      },
      src: ['app/css/partials/_variables.scss']
    },
    lax: {
      options: {
        import: false
      },
      src: ['app/css/*.css']
    }
  }
};
