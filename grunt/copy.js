module.exports = {
  copy: {

    // Copy Only Needed Bootstrap Files
    bootstrap: {
      expand: true,
      nonull: true,
      src: [
      'app/lib/bootstrap-sass/assets/stylesheets/bootstrap/_grid.scss',
      'app/lib/bootstrap-sass/assets/stylesheets/bootstrap/_mixins.scss',
      'app/lib/bootstrap-sass/assets/stylesheets/bootstrap/_variables.scss'
      ],
      dest: 'app/css/partials/bootstrap',
      flatten: true,
      filter: 'isFile'
    },

    // Copy Bootstrap Mixins
    bootstrapMixins: {
      expand: true,
      nonull: true,
      src: 'app/lib/bootstrap-sass/assets/stylesheets/bootstrap/mixins/*.scss',
      dest: 'app/css/partials/bootstrap/mixins',
      flatten: true,
      filter: 'isFile'
    },

    // Copy Font Awesome Fonts
    fonts: {
      expand: true,
      nonull: true,
      src: 'app/lib/font-awesome-sass/assets/fonts/**',
      dest: 'app/fonts',
      flatten: true,
      filter: 'isFile'
    },

    // Copy Font Awesome SASS
    fontawesomeSASS: {
      expand: true,
      nonull: true,
      src: 'app/lib/font-awesome-sass/assets/stylesheets/font-awesome/*.scss',
      dest: 'app/css/partials/fontawesome',
      flatten: true,
      filter: 'isFile'
    }

  }
};
