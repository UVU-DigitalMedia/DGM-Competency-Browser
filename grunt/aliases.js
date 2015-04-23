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
  ],
  'start':[
    'sass',
    'browser-sync',
    'nodemon'
  ]
};
