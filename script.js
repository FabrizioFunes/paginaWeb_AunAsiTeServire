window.addEventListener('load', function () {
    const loaderWrapper = document.getElementById('loader-wrapper');
    loaderWrapper.style.transition = 'opacity 0.5s ease';
    loaderWrapper.style.opacity = '0';
    setTimeout(() => {
      loaderWrapper.style.display = 'none';
    }, 500);
  });


  function copiarTexto() {
    const texto = `CVU: 0000003100091360860162
Alias: teservire
CUIT/CUIL: 27059960569
Mercado Pago`;

    navigator.clipboard.writeText(texto).then(() => {
    }).catch(err => {
      console.error("Error al copiar: ", err);
      alert("No se pudo copiar. Intenta manualmente.");
    });
  }


  const carousel = document.querySelector('#multiImageCarousel');
    const carouselInstance = new bootstrap.Carousel(carousel, {
      interval: 2500,
      ride: 'carousel'
    });