// Galería de imágenes por cada contenedor
const galerias = {
  cap1: [
    "../fotos dibujo/Cap-1.png",
    "../fotos/carrusel_1/b656952e-76db-4bd7-b9f7-c49adf525d4b.jpg",
    "../fotos/carrusel_1/descargar.jpg"
  ],
  cap2a: [
    "../fotos dibujo/Cap-2a.png",
    "../fotos dibujo/Cap-2a-extra1.png"
  ],
  cap2b: [
    "../fotos dibujo/Cap-2b.png"
  ],
  // Agrega más claves e imágenes según necesites
};

document.querySelectorAll('.contenedor').forEach(caja => {
  caja.addEventListener('click', () => {
    const id = caja.getAttribute('data-id');
    abrirModalConGaleria(galerias[id] || []);
  });
});

function abrirModalConGaleria(imagenes) {
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');
  
  modalBody.innerHTML = ''; // Limpiar anterior
  imagenes.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = '';
    modalBody.appendChild(img);
  });

  modal.style.display = 'block';
}

function cerrarModal() {
  document.getElementById('modal').style.display = 'none';
}
