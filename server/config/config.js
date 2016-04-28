'use strict';

var express = require('express');
var compression = require('compression');
var winston = require('winston');
var PROD = 'production';
var isProduction = process.env.NODE_ENV === PROD;

module.exports = function(app) {
  const logLevel = isProduction ? 'warn' : 'silly';
  global.log = new (winston.Logger)({
    transports: [
      new (winston.transports.Console)({ level: logLevel, colorize: true, timestamp: true })
    ]
  });
  global.log.exitOnError = false;

  app.use(function(req, res, next) {
    global.log.silly(req.path);
    req.lysa = {};
    return next();
  });

  setDefaults(app);
};

function setDefaults(app) {
  var maxAge = 1000 * 60 * 60 * 24 * 365;
  app.use(compression());
  app.use(express.static(global.paths.public, { maxAge: maxAge }));
  app.enable('strict routing');
  app.enable('case sensitive routing');
}
