module.exports = function(app) {

  switch (process.env.NODE_ENV) {
  case 'production':
    app.use(logErrors);
    app.use(errorHandler);
    break;
  case 'development':
    app.use(logErrors);
    app.use(errorHandler);
    break;
  default:
    app.use(logErrors);
    app.use(errorHandler);
    break;
  }

  function logErrors(err, req, res, next) {
    var ip = req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;

    global.log.error('\n\n');
    global.log.error('=====\nip:', ip);
    global.log.error('error:', err.stack);
    global.log.error('=====\n\n');
    next(err);
  }

  function errorHandler(err, req, res) {
    if (req.xhr) {
      res.send(500, { error: err });
      return;
    }
    res.sendFile(global.paths.public + 'error.html');
  }

};