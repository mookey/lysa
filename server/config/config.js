'use strict';

const express = require('express');
const compression = require('compression');
const winston = require('winston');
const PROD = 'production';
const isProduction = process.env.NODE_ENV === PROD;
const useragent = require('useragent');
const supportedBrowsers = {
  chrome: { 'min-version': 0 },
  firefox: { 'min-version': 0 },
  ie: { 'min-version': 11 },
  safari: { 'min-version': 0 },
  mobile_safari: { 'min-version': 9 },
  edge: { 'min-version': 13 }
};


module.exports = function(app) {
  setDefaults(app);
  addGlobalLogObject(app);
  checkIfBrowserIsSupported(app);
  addLysaObject(app);
};


function addGlobalLogObject() {
  const logLevel = isProduction ? 'warn' : 'silly';
  global.log = new (winston.Logger)({
    transports: [
      new (winston.transports.Console)({ level: logLevel, colorize: true, timestamp: true })
    ]
  });
  global.log.exitOnError = false;
}


function checkIfBrowserIsSupported(app) {
  app.use(function(req, res, next) {
    let ua = useragent.is(req.headers['user-agent']);
    let version = parseFloat(ua.version);
    if (Number.isNaN(version)) {
      version = -1;
    }
    global.log.silly('useragent', useragent.parse(req.headers['user-agent']).toString());
    if (
      (ua.firefox && (version > supportedBrowsers['firefox']['min-version'])) ||
      (ua.chrome && (version > supportedBrowsers['chrome']['min-version'])) ||
      (ua.ie && (version > supportedBrowsers['ie']['min-version'])) ||
      (ua.safari && (version > supportedBrowsers['safari']['min-version'])) ||
      (ua.mobile_safari && (version > supportedBrowsers['mobile_safari']['min-version']))
    ) {
      return next();
    }
    res.sendFile(global.paths.public + 'unsupported.html');
  });
}


function addLysaObject(app) {
  app.use(function(req, res, next) {
    req.lysa = {};
    global.log.silly('lysa object', JSON.stringify(req.lysa));
    global.log.silly(req.path);
    next();
  });
}


function setDefaults(app) {
  let maxAge = 1000 * 60 * 60 * 24 * 365;
  app.use(compression());
  app.use(express.static(global.paths.public + 'dist', { maxAge: maxAge }));
  app.use('/images', express.static(global.paths.public + 'images', { maxAge: maxAge }));
  app.enable('strict routing');
  app.enable('case sensitive routing');
}
