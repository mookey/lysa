const express = require('express');
const app = express();
const env = process.env.NODE_ENV === 'production' ? 'production' : 'development';

global.root = __dirname;
global.paths = require(global.root + '/server/config/paths.js');
global.conf = require(global.paths.config + env.toLowerCase() + '.json', 'utf8');

require(global.paths.config + 'config.js')(app);
require(global.paths.routes + 'routes.js')(app);
// require(global.env.routes + 'errors.js')(app);

app.listen(global.conf.PORT);
global.log.info('== Service started in "' + process.env.NODE_ENV + '" mode ==');