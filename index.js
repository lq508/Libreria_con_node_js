const express = require("express");
const Rutas = require("./rutas/rutas.js");
const Path = require("path");
const App = express();
const BodyParser = require("body-parser");


  App.use(BodyParser.urlencoded({extended:false}));
 App.use(Rutas);
 App.use(express.static(Path.join(__dirname, 'views')))




  App.listen(3000, function(){


    console.log(" Esta iniciado");

  });
