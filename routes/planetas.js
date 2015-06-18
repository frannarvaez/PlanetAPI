var express = require('express');
var router = express.Router();

var db = {};

router.route('/')
	.all(function(req, res, next){
		next();
	})
	.post(function(req, res){


		if (req.body.planeta !== undefined){
			// manipulamos la request
		  var nuevoPlaneta = req.body.planeta;
		  nuevoPlaneta.id = Date.now();

		  db[nuevoPlaneta.id] = nuevoPlaneta;

		  //preparamos la respuesta
		  res.set('Content-Type','application/json');
		  res.status(201);

		  // Enviamos la respuesta
		  res.json({
		    planeta: nuevoPlaneta
		  });
		}
		else {
			console.log('body empty');
			return res.status(404).send({error: 'bad request'});
		}

	})
	.get(function(req, res){
		res.json({
			'planetas': db
		});
	});

router.route('/:id?')
	.get(function(req, res){
		var id = req.params.id;
		var planeta = db[id];

		if (!planeta){
			return res.status(404).send({error: 'Planeta no encontrado'});
		}
		else {
			res.set(200);
			res.json(planeta);
		}
	});


module.exports = router;

