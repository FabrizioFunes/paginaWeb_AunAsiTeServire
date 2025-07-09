window.addEventListener('load', function () {
    const loaderWrapper = document.getElementById('loader-wrapper');
    loaderWrapper.style.transition = 'opacity 0.5s ease';
    loaderWrapper.style.opacity = '0';
    setTimeout(() => {
      loaderWrapper.style.display = 'none';
    }, 500);
  });


// Galería de imágenes por cada contenedor
const galerias = {
  cap1: [
    "../fotos-dibujo/Cap-1.png",

  ],
  cap2a: [
    "../fotos-dibujo/Cap-2a.png",
  ],
  cap2b: [
    "../fotos-dibujo/Cap-2b.png"
  ],
  cap3: [
    "../fotos-dibujo/Cap-3.png"
  ],
  cap4: [
    "../fotos-dibujo/Cap-4.png"
  ],
  cap5: [
    "../fotos-dibujo/Cap-5.png"
  ],
  cap6: [
    "../fotos-dibujo/Cap-6.png"
  ],
  cap7: [
    "../fotos-dibujo/Cap-7.png"
  ],
  cap8: [
    "../fotos-dibujo/Cap-8.png"
  ],
  cap9: [
    "../fotos-dibujo/Cap-9.png"
  ],
  cap10: [
    "../fotos-dibujo/Cap-10.jpeg"
  ],
  cap11: [
    "../fotos-dibujo/Cap-11.png"
  ],
  cap12: [
    "../fotos-dibujo/Cap-12.png"
  ],
  cap13: [
    "../fotos-dibujo/Cap-13.png"
  ],
  cap14: [
    "../fotos-dibujo/Cap-14.png"
  ],
  cap16: [
    "../fotos-dibujo/Cap-16.jpeg"
  ]
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
