'use strict';

/***
	remember to set the corresponding env vars
***/

module.exports = {
	
	sessionSecret: process.env.SESSION_SECRET || process.env.npm_package_config_sessionSecret || "secretKitten",
	mongoUri: process.env.MONGO
	
}