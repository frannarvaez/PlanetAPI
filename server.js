// Dependencias
var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');

// Setup App
var app = module.exports = express();
var port = process.env.PORT || 8000;

// Middleware
app.use(logger('dev'));
app.use(bodyParser.json());



var router = require('./routes/planetas');
app.use('/planetas', router);


/*
// Rutas
app.post('/planetas', function (req, res) {

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

});
*/

app.listen(port, function () {
  console.log('Listening on port ' + port + '...');
});


/*



app.get('/planetas/:id', function (req, res) {

  // manipulamos la request
  var idPlaneta = req.params.id;

  if (idPlaneta !== null){
    var planeta = planeta[idPlaneta];
    //preparamos la respuesta
    res.set('Content-Type','application/json');
    res.status(201);
  }
});
*/