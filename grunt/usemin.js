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
