(function() {

  const hero = document.querySelector(".header__hero .col-2:last-child");
  const services = document.getElementById('services');

  window.addEventListener('scroll', (e) => {
    const y = window.pageYOffset;

    // Уплывает фон RESUME
    if (y > 0 && y < 900) {
      hero.style.backgroundPositionX = `-${y}px`;
    } else {
      hero.style.backgroundPositionX = "0px";
    }
  
    // Вытягивается фон services
    if (y > 900 && y < 1200) {
      services.style.backgroundSize = `${y-366}px 453px`;
    }
    
  })

})();