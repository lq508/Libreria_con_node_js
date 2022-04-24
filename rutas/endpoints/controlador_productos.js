const mongoose = require("mongoose");
const modelo_libros = require("../../database/productos.js");







class ControladorProductos{

  constructor(mongoose, modelo_libros){
    this.mongoose = mongoose;
    this.modelo_libros = modelo_libros;
    this.url = "mongodb://localhost/libreria";
    this.Conectando();



  }






  async Conectando(){

  let conexion = await  mongoose.connect(this.url);
  if(conexion){

    console.log("conectado");

  }

  }


  Vista_inicial(req , res){

    res.sendFile("/home/dantxd507/Documentos/Descargas/Telegram Desktop/personal/views/index.html");




  }

   Consulta_libros= async(req , res)=> {

     let libros = await this.modelo_libros.find({});
     res.send({
       libros:libros


     });

  }

 Modificando_libros = async (req ,res)=>{


  }


   Eliminando_libros_general = async (req , res)=>{
    let eliminacion = await  this.modelo_libros.deleteMany({});
    if(eliminacion){

      console.log("eliminacion exitosa");

    }
  }

   Eliminando_libros = async (req, res)=>{

  }

 Creando_Libros = async (req , res , nombre)=>{
    let name = req.body.nombre;
    let precio = req.body.precio;
    let tipo = req.body.tipo;

  let nombre_archivo = req.body.nombre_archivo;



 let verificacion =  await this.modelo_libros.create({
      nombre:name,
      precio:precio,
      tipo:tipo,
      nombre_archivo:req.body.nombre_archivo
    });

    if(verificacion){

      console.log("Registro exitoso");

    }




  }





  Vista_creando_libros(req , res){

    res.sendFile("/home/dantxd507/Documentos/Descargas/Telegram Desktop/personal/views/admin/creando_libros.html");

  }

  Vista_libros_usuarios(req , res){

    res.sendFile("/home/dantxd507/Documentos/Descargas/Telegram Desktop/personal/views/users/libros.html");

  }









}

let objeto_productos = new ControladorProductos(mongoose, modelo_libros);

module.exports = objeto_productos;
