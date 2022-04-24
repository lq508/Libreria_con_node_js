const Rutas = require("express").Router();
const ControladorProductos = require("./endpoints/controlador_productos.js");
const multer = require("multer");
const mimeTypes = require("mime-types");
let nombre_archivo = "";


// midlewares para copiar el archivo


const storage = multer.diskStorage({
  destination:"libros/",
  filename:function(req, file, cb){
    nombre_archivo= Date.now() + "." + mimeTypes.extension(file.mimetype);

    cb("",  nombre_archivo);
  }


})

const AgregandoNombre = function(req , res , next){

  req.body.nombre_archivo=nombre_archivo;
  next();


}

const upload = multer({
  storage : storage

});









//Rutas


Rutas.post("/creando_libros" , upload.single("libro") , AgregandoNombre ,  ControladorProductos.Creando_Libros);
Rutas.get("/modificando_libros", ControladorProductos.Modificando_libros);
Rutas.get("/eliminando_libros", ControladorProductos.Eliminando_libros);
Rutas.get("/consulta_libros", ControladorProductos.Consulta_libros);
Rutas.get("/eliminacion_total" , ControladorProductos.Eliminando_libros_general);

Rutas.get("/vista_creando_libros" , ControladorProductos.Vista_creando_libros);


Rutas.get("/" , ControladorProductos.Vista_inicial);

Rutas.get("/vista_libros_usuarios" , ControladorProductos.Vista_libros_usuarios);




module.exports= Rutas;
