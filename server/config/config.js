'use strict';

var express = require('express');
var compression = require('compression');
var winston = require('winston');
var PROD = 'production';
var isProduction = process.env.NODE_ENV === PROD;

module.exports = function(app) {

  function setDefaults(app) {
    var maxAge = 1000 * 60 * 60 * 24 * 365;
    app.use(compression());
    app.use(express.static(global.paths.public, { maxAge: maxAge }));
    app.enable('strict routing');
    app.enable('case sensitive routing');
  }

  if (isProduction) {
    global.log = new (winston.Logger)({
      transports: [
        new (winston.transports.Console)({ level: 'warn', colorize: true, timestamp: true })
      ]
    });
  } else {
    global.log = new (winston.Logger)({
      transports: [
        new (winston.transports.Console)({ level: 'silly', colorize: true, timestamp: true })
      ]
    });
  }
  global.log.exitOnError = false;
  app.use(function(req, res, next) {
    global.log.silly(req.path);
    return next();
  });

  setDefaults(app);

};
