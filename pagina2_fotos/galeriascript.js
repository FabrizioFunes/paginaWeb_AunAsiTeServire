window.addEventListener('load', function () {
    const loaderWrapper = document.getElementById('loader-wrapper');
    loaderWrapper.style.transition = 'opacity 0.5s ease';
    loaderWrapper.style.opacity = '0';
    setTimeout(() => {
      loaderWrapper.style.display = 'none';
    }, 500);
  });


// Initialize GLightbox for each group of images

  for (let i = 1; i <= 17; i++) {
    GLightbox({ selector: `.grupo${i}` });
  }

  
