const {Schema , model} = require("mongoose");


let libros =  Schema({
  nombre:{
    type:String,
    required:true,

  },

  precio:{
    type:Number,
    required:true,

  },

  tipo:{
    type:String,
    required:true,

  },

  nombre_archivo:{
    type:String,
    required:true
  }


});

module.exports = model( 'Libros', libros );
