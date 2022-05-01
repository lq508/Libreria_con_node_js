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

Consulta_libros= async(req , res)=> {

let libros = await this.modelo_libros.find({});
res.send({libros:libros});

}


Modificando_libros = async (req ,res)=>{

  let id_libro = req.body.id;
  let resultado = await this.modelo_libros.findById(id_libro);
  console.log(resultado);

  resultado.nombre=req.body.nombre;
  resultado.precio=req.body.precio;
  resultado.tipo=req.body.tipo;

  let modificacion = await resultado.save();

  if(modificacion){

    res.send({
      status:200,
      respuesta:"modificacion_exitosa"

    });

  }



}


Eliminando_libros_general = async (req , res)=>{
  let eliminacion = await  this.modelo_libros.deleteMany({});
  if(eliminacion){

    console.log("eliminacion exitosa");

  }
}

Eliminando_libros = async (req, res)=>{

  let id_libro = req.body.id;
  let eliminacion_libro = await this.modelo_libros.deleteOne({_id:id_libro});
  if(eliminacion_libro){

    res.send({
      status:200,
      respuesta:"eliminacion_exitosa"


    })

  }


}

Creando_Libros = async (req , res )=>{
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

    res.render("./admin/creando_libros");

  }

  Vista_libros_usuarios(req , res){

    res.render("./users/libros");
  }


  Vista_inicial(req , res){

    res.render("index");



  }








}

let objeto_productos = new ControladorProductos(mongoose, modelo_libros);

module.exports = objeto_productos;
