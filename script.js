let index = 0;

function mover(direccion) {
  const slider = document.getElementById("productosSlider");
  const productos = document.querySelectorAll(".producto");
  const visibles = 3;

  index += direccion;

  if (index < 0) index = productos.length - visibles;
  if (index > productos.length - visibles) index = 0;

  const ancho = productos[0].offsetWidth + 20;
  const maxTranslate = (productos.length - visibles) * ancho;
  const translateX = Math.min(index * ancho, maxTranslate);

  slider.style.transform = `translateX(-${translateX}px)`;
}
