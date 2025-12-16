let posicion = 0;
const visibles = 3;

function mover(direccion) {
  const slider = document.querySelector('.productos-slider');
  const total = slider.children.length;
  const max = total - visibles;

  posicion += direccion;

  if (posicion > max) {
    posicion = 0; // vuelve al inicio
  }

  if (posicion < 0) {
    posicion = max; // va al final
  }

  const ancho = 255;
  slider.style.transform = `translateX(-${posicion * ancho}px)`;
}
