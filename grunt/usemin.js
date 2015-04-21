module.exports = {
  usemin: {
  html: 'index.html',
  options: {
    blockReplacements: {
/*    css: function (block) {
          return '<link rel="stylesheet" href="' + block.dest + '">';
      },*/
      js: function (block) {
          return '<script src="'+ block.dest +'"></script>';
      }
    }
  }
}
};

/*createConfig: {
  var block = {
  type: 'js',
  dest: 'production/build.js',
  src: [
    'app/*.js'
  ],
  raw: [
    '<!-- build:js production/build.js -->',
    '<script src="lib/jquery/dist/jquery.min.js"></script>',
    '<script src="lib/jquery-ui/jquery-ui.min.js"></script>',
    '<script src="lib/angular/angular.js"></script>',
    '<script src="lib/angular-sanitize/angular-sanitize.min.js"></script>',
    '<script src="lib/angular-mocks/angular-mocks.js"></script>',
    '<script src="lib/angular-resource/angular-resource.min.js"></script>',
    '<script src="lib/angular-ui-router/release/angular-ui-router.min.js"></script>',
    '<script src="lib/angular-bootstrap/ui-bootstrap.js"></script>',
    '<script src="lib/angular-breadcrumb/dist/angular-breadcrumb.min.js"></script>',
    '<script src="js/app.js"></script>',
    '<script src="js/animations.js"></script>',
    '<script src="js/controllers.js"></script>',
    '<script src="js/filters.js"></script>',
    '<script src="js/services.js"></script>',
    '<script src="skills/skillsCtrl.js"></script>',
    '<script src="courses/courseCtrl.js"></script>',
    '<script src="js/jquery.js"></script>',
    '<script src="js/common/services/common.services.js"></script>',
    '<script src="js/common/services/empResource.js"></script>',
    '<script src="js/common/services/empResourceMock.js"></script>',
    '<script src="js/common/services/trackResource.js"></script>',
    '<script src="js/common/services/trackResourceMock.js"></script>',
    '<script src="https://cdn.firebase.com/js/client/2.1.2/firebase.js"></script>',
    '<script src="https://cdn.firebase.com/libs/angularfire/0.9.2/angularfire.min.js"></script>',
    '<!-- endbuild -->'
  ]
  }
},*/
