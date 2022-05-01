let url = "http://localhost:3000/consulta_libros";


class Consulta_libros{


  constructor(url){

    this.url = url;
    this.libros = null;
    this.Consulta();


  }

  async Consulta(){

    let libros = await fetch(this.url);
    let libros_json = await libros.json();
    this.libros = libros_json.libros;
    console.log(this.libros[0]._id);

    this.Creando_libros(this.libros[0]._id);



  }


  Creando_libros(libros){

    let seccion_1 = document.querySelector(".seccion_1");
    libros.forEach(function(libro){

          let content_libro = document.createElement("div");
          let content_imagen_libro = document.createElement("div");
          let imagen_libro = document.createElement("img");
          imagen_libro.setAttribute("src", "../images/libros.jpeg");
          imagen_libro.classList.add("imagen_libro");
          content_imagen_libro.classList.add("content_imagen_libro");
          content_imagen_libro.appendChild(imagen_libro);


          // creando nombre libro
          let nombre_libro = document.createElement("div");
          nombre_libro.innerHTML = libro.nombre;
          nombre_libro.classList.add("nombre_libro");


          // creando boton libro
          let boton_libro = document.createElement("div");
          boton_libro.classList.add("boton_descarga");

          let link_libro = document.createElement("a");
          link_libro.setAttribute("href" , "../libros/" + libro.nombre_archivo);
          link_libro.setAttribute("download" , libro.nombre_archivo);
          link_libro.innerHTML="Descarga";


          //Agregando libro
          boton_libro.appendChild(link_libro);
          content_libro.classList.add("content_libro");
          content_libro.appendChild(content_imagen_libro);
          content_libro.appendChild(nombre_libro);
          content_libro.appendChild(boton_libro);

          seccion_1.appendChild(content_libro);








    });




  }



}


let objeto_consulta = new Consulta_libros(url);
