'use strict';

var sanitize = require('./../methods/sanitizer');

var IncrementRoute = function(router){
	
	/* POST to Create Account */
	router.post('/increment', function(req,res,next) {
		console.log(req.body);
		sanitize(req,['name','location']);
		var db = req.db;
		var users = db.get('users');
		users.findOne({username:req.body.user}, function(err,docs){
			if(err) throw err;
			console.log(docs);
			if( !~docs.goingCurrent.indexOf(req.body.name)){
				users.findAndModify({username:req.body.user},{$push: {goingCurrent:req.body.location} });
			}
		});
		
		var json = {"data":"data"};
		res.json(json);
		
	});

}

module.exports = IncrementRoute;