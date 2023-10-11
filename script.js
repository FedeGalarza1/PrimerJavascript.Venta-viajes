import {barcelona, roma, paris, londres} from './ciudades.js';

// Obtener elementos del DOM
let enlaces = document.querySelectorAll('a');
let tituloElemento = document.getElementById('titulo');
let subTituloElemento = document.getElementById('subtitulo');
let parrafoElemento = document.getElementById('parrafo');
let precioElemento = document.getElementById('precio');

// Evento click a cada enlace
enlaces.forEach(function(enlace) {
  enlace.addEventListener('click', function() {
    // remover el activo
    enlaces.forEach(function(enlace) {
      enlace.classList.remove('active');
    });
    // agregar active al que corresponda
    this.classList.add('active');

    // obtener contenido segun corresponda
    let contenido = Obtenercontenido(this.textContent);

    //lo escribimos
    tituloElemento.innerHTML = contenido.titulo;
    subTituloElemento.innerHTML = contenido.subtitulo;
    parrafoElemento.innerHTML = contenido.parrafo;

    // Limpiamos el mensaje del precio anterior
    precioElemento.innerHTML = '';

    // Agregamos el botón de precio
    let precioBoton = document.createElement('button');
    precioBoton.textContent = 'Precio';
    precioBoton.addEventListener('click', function() {
      // Cargamos el precio de la ciudad en el elemento precio
      precioElemento.innerHTML = contenido.precio;
      precioElemento.style.display = 'block';
    });

    // Agregamos el botón al elemento precio
    precioElemento.appendChild(precioBoton);
  })
});

// funcion para traer la informacion correcta desde otra pestaña. cuidades.js
function Obtenercontenido(enlace) {
  let contenido = {
    'Barcelona': barcelona,
    'Roma': roma,
    'París': paris,
    'Londres': londres,
  };
  return contenido[enlace];
}