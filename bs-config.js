'use strict';
// var fallback = require('connect-history-api-fallback');
// var log = require('connect-logger');
/*
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 */
module.exports = {
	port: 8085,
	injectChanges: true,
	watchOptions: {
		ignored: ['node_modules', '.git'],
	},
};
