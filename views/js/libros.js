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
    this.Creando_libros(this.libros);

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

          content_libro.classList.add("content_libro");

          content_libro.appendChild(content_imagen_libro);

          seccion_1.appendChild(content_libro);








    });




  }



}


let objeto_consulta = new Consulta_libros(url);
