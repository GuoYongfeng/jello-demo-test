var path = require('path');

fis.config.set('modules.postprocessor.vm', 'amd');
fis.config.set('modules.postprocessor.js', 'amd');

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
    path : [

    ]
  }
});
