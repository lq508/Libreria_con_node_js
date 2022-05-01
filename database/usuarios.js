const {Schema , model} = require("mongoose");


let usuarios = Schema({
    Primer_Nombre:{
        type:String,
        required:true
    },

    Primer_apellido:{
        type:String,
        required:true

    },

    Edad:{

        type:Number,
        required:true

    },

    Email:{
        type:String,
        required:true

    },


    Status:{
        type:String,
        required:true


    }
    





})



module.export = model('Usuarios' , usuarios)