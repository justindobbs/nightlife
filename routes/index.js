'use strict';

var express = require('express');
var router = express.Router();
var flash = require('connect-flash');
var passport = require('passport'),
 LocalStrategy = require('passport-local').Strategy;	

//collect our routers
var loginRouter = require('./login');
var createAccountRouter = require('./createAccount');
var appRouter = require('./app');

//apply routes 
loginRouter(router,passport,flash);
createAccountRouter(router);
appRouter(router);
  
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nightlife' });
});


module.exports = router;