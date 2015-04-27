module.exports = {
	cacheBust: {
    options: {
      encoding: 'utf8',
      algorithm: 'md5',
      length: 16
    },
    assets: {
      files: [{
        src: ['index.html']
      }]
    }
  }


};