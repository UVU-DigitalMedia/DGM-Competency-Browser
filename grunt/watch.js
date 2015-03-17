module.exports = {
  watch: {
    files: ['<%= jshint.files %>', 'app/css/*.scss' ],
    tasks: ['sass', 'concat', 'jshint', 'csslint']
  }
};
