const Rutas = require("express").Router();
const ControladorProductos = require("./endpoints/controlador_productos.js");
const ControladorUsuarios = require("./endpoints/controlador_usuarios.js");

const multer = require("multer");
const mimeTypes = require("mime-types");
const controlador_usuario = require("./endpoints/controlador_usuarios.js");
let nombre_archivo = "";


// midlewares para copiar el archivo


const storage = multer.diskStorage({
  destination:"views/libros/",
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









//Rutas de los libros


Rutas.post("/creando_libros" , upload.single("libro") , AgregandoNombre ,  ControladorProductos.Creando_Libros);
Rutas.post("/modificando_libros", ControladorProductos.Modificando_libros);
Rutas.post("/eliminando_libros", ControladorProductos.Eliminando_libros);
Rutas.get("/consulta_libros", ControladorProductos.Consulta_libros);
Rutas.post("/eliminacion_total" , ControladorProductos.Eliminando_libros_general);

Rutas.get("/vista_creando_libros" , ControladorProductos.Vista_creando_libros);


Rutas.get("/" , ControladorProductos.Vista_inicial);

Rutas.get("/vista_libros_usuarios" , ControladorProductos.Vista_libros_usuarios);



/*Rutas para usuarios*/

Rutas.get("/ver_usuarios" , ControladorUsuarios.Ver_usuarios);
Rutas.post("/crear_usuario", controlador_usuario.Crear_usuario);
Rutas.post("/eliminar_usuario",ControladorUsuarios.Eliminar_usuario);
Rutas.post("/modificar_usuario", ControladorUsuarios.Eliminar_usuario);


module.exports= Rutas;
