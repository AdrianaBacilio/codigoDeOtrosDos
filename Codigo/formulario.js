// Selecciona el formulario por su ID
var formulario = document.querySelector("#form");

// Agrega un evento al enviar el formulario
formulario.addEventListener("submit", function(event) {
  // Evita que el formulario se envíe automáticamente
  event.preventDefault();
  
  // Obtiene los elementos del formulario y asigna nombres más descriptivos
  var nombreInput = formulario.elements[0];
  var edadInput = formulario.elements[1];
  var nacionalidadSelect = formulario.elements[2];

  // Obtiene los valores de los campos del formulario
  var nombre = nombreInput.value;
  var edad = parseInt(edadInput.value); // Convierte el valor de edad a un número entero
  var i = nacionalidadSelect.selectedIndex;
  var nacionalidad = nacionalidadSelect.options[i].value;
  
  // Muestra los valores en la consola para propósitos de depuración
  console.log(nombre, edad);
  console.log(nacionalidad);

  // Verifica si el nombre está vacío y muestra un error si es así
  if (nombre.length === 0) {
    nombreInput.classList.add("error");
  } else {
    nombreInput.classList.remove("error"); // Elimina la clase de error si se ha ingresado un nombre válido
  }

  // Verifica si la edad está fuera del rango permitido y muestra un error si es así
  if (edad < 18 || edad > 120) {
    edadInput.classList.add("error");
  } else {
    edadInput.classList.remove("error"); // Elimina la clase de error si se ha ingresado una edad válida
  }

  // Verifica si los campos tienen valores válidos para agregar el invitado a la lista
  if (nombre.length > 0 && (edad > 18 && edad < 120)) {
    // Llama a la función agregarInvitado con los valores válidos
    agregarInvitado(nombre, edad, nacionalidad);
  }
});

// Crea un botón para eliminar invitados
var botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
var corteLinea = document.createElement("br");
document.body.appendChild(corteLinea);
document.body.appendChild(botonBorrar);

// Función para agregar un invitado a la lista
function agregarInvitado(nombre, edad, nacionalidad) {
  // Convierte los códigos de nacionalidad a nombres más legibles
  switch (nacionalidad) {
    case "ar":
      nacionalidad = "Argentina";
      break;
    case "mx":
      nacionalidad = "Mexicana";
      break;
    case "vnzl":
      nacionalidad = "Venezolana";
      break;
    case "per":
      nacionalidad = "Peruana";
      break;
    default:
      break;
  }

  // Selecciona el contenedor de la lista de invitados
  var lista = document.getElementById("lista-de-invitados");

  // Crea un nuevo elemento de lista y le asigna una clase adecuada
  var elementoLista = document.createElement("div");
  elementoLista.classList.add("elemento-lista");
  lista.appendChild(elementoLista);

  // Crea elementos para mostrar la información del invitado
  crearElemento("Nombre", nombre);
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidad);

  // Crea un botón para eliminar este invitado específico
  var botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.id = "boton-borrar";
  var corteLinea = document.createElement("br");
  elementoLista.appendChild(corteLinea);
  elementoLista.appendChild(botonBorrar);

  // Agrega un evento para eliminar el invitado al hacer clic en el botón
  botonBorrar.onclick = function() {
    botonBorrar.parentNode.remove(); // Elimina el elemento de lista que contiene la información del invitado
  };
}

// Función auxiliar para crear elementos de texto e input para mostrar la información del invitado
function crearElemento(descripcion, valor) {
  var spanNombre = document.createElement("span");
  var inputNombre = document.createElement("input");
  var espacio = document.createElement("br");
  spanNombre.textContent = descripcion + ": ";
  inputNombre.value = valor;
  elementoLista.appendChild(spanNombre);
  elementoLista.appendChild(inputNombre);
  elementoLista.appendChild(espacio);
}
