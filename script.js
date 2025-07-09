window.addEventListener('load', function () {
    const loaderWrapper = document.getElementById('loader-wrapper');
    loaderWrapper.style.transition = 'opacity 0.5s ease';
    loaderWrapper.style.opacity = '0';
    setTimeout(() => {
      loaderWrapper.style.display = 'none';
    }, 500);
  });