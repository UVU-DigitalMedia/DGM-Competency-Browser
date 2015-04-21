module.exports = {
  'default': ['lint'],
  'lint': [
    'jshint'
  ],
  'build': [
    'sass',
    'cssmin',
    'concat',
    'uglify',
    'usemin'
  ]
};
