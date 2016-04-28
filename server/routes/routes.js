'use strict';

module.exports = function(app) {

  app.get('*', function(req, res) {
    res.sendFile(global.paths.public + 'index.html');
  });

};

