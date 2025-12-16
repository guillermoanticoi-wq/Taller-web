function filtrar(categoria) {
  document.querySelectorAll('.producto').forEach(producto => {
    if (categoria === 'todos' || producto.classList.contains(categoria)) {
      producto.style.display = 'block';
    } else {
      producto.style.display = 'none';
    }
  });
}

// OCULTA PRODUCTOS SIN IMAGEN
document.querySelectorAll('.producto img').forEach(img => {
  if (!img.src || img.src.endsWith('/')) {
    img.parentElement.style.display = 'none';
  }
});
