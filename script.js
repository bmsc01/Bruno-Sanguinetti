//alert("Hola este es mi Javascript");

//let nombre = "Bruno Sanguinetti" ; 

//console.log(nombre);

//let title = document.querySelector(".titulo")

//console.log(title.textContent);

// Seleccionar el elemento por su clase 'titulo'
 // CONDICIONALES 

let contenidoTitulo = "Mi web";

var tituloElement = document.querySelector('.titulo');
tituloElement.innerHTML = contenidoTitulo ; 

let textoTitulo = tituloElement.innerText;
// Imprimir el contenido del título en la consola
console.log(textoTitulo);

if ( textoTitulo == "Mi web") {
    tituloElement.innerHTML = "La web de Bruno ";
}

//FUNCIONES 
//
// nombre = "Martin";
//let ciudad = " Canelones";
//let gusto = "el mate";

//let parrafo = document.querySelector(".parrafo2");

//function cambiarTexto (nombre, ciudad, gusto) {
 //   let contenido = `Me llamo ${nombre}, soy de Uruguay y vivo en ${ciudad}. Me gusta el asado y ${gusto} en la tardecita. Me encantaría aprender a programar para poder ayudar a las personas a mostrar lo que hacen` ;

 //   return contenido;
//}

//parrafo.innerText = cambiarTexto(nombre, ciudad, gusto); 

//MENU 

let menu_responsive = document.querySelector(".checkbtn");

      menu_responsive.onclick = function () {

        navBar = document.querySelector(".navbar");

        navBar.classList.toggle("active");

      };

//FORMULARIO  DE CONTACTO

      const form = document.getElementById("form");
      const nombre = document.getElementById("nombre");
      const parrafo = document.getElementById("alertas");
      
      function validarFormulario() {
        let warnings = "";
        let valido = true;
        parrafo.innerHTML = "";
      
        if (nombre.value.length < 4) {
          warnings += `El nombre debe contener más de 4 caracteres`;
          valido = false;
        }
      
        if (!valido) {
          parrafo.innerHTML = warnings;
        } else {
          parrafo.innerHTML = "Enviado";
        }
        return valido;
      }
      
      form.addEventListener("submit", (e) => {
        if (validarFormulario()) {
          // Si la validación es exitosa, puedes enviar el formulario
          formulario.submit();
        } else {
          e.preventDefault(); // Evita que el formulario se envíe automáticamente
        }
      });