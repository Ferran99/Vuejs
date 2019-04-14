
/*
 * Utilització de fitxers estàtics amb ExpressJS
 * @author sergi grau, sergi.grau@fje.edu
 * @version 1.0
 * date 14.01.2016
 * format del document UTF-8
 *
 * CHANGELOG
 * 14.01.2016
 * - Utilització de fitxers estàtics
 *
 * NOTES
 * ORIGEN
 * Desenvolupament Aplicacions Web. Jesuïtes El Clot
 */
var express = require('express');
var app = express();
var obj = require('./Words.json');
var obj2 = require('./Words2.json');
var obj3 = require('./Words3.json');


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



app.get('/', function (req, res) {
  var jsonFinal = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
  console.log(jsonFinal);
  if(jsonFinal == 2){
    res.send(obj);

  }else if(jsonFinal == 1){
    res.send(obj2);


  }else if(jsonFinal == 3){
    res.send(obj3)
  }


});
app.listen(3000, function () {
  console.log('Servidor escoltant port 3000');
})

// qualsevol altre petició retorna 404 not found
//req i res són els mateixos objectes de NodeJS