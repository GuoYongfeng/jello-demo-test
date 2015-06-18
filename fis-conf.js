var path = require('path');

fis.config.merge({
  project: {
    md5Length: 8
  },
  modules : {
    parser : {
        coffee : 'coffee-script',
        less : ['less'],
        md : 'marked'
    }
  },
  roadmap : {
    ext : {
      less : 'css',
      coffee : 'js',
      md : 'html'
    },
    domain: '/common'
  }
});
