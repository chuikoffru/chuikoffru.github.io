(function () {
  const hero = document.querySelector(".header__hero .col-2:last-child");
  const services = document.getElementById("services");
  const menuBtn = document.querySelector("#mobile-nav-button button");
  const navBar = document.getElementById("navbar");

  /**
   * Обрабатываем клик по кнопке вызова меню в мобильной версии
   */
  menuBtn.addEventListener("click", (e) => {
    // Получаем состояние навигационной панели
    currentState = getComputedStyle(navBar).getPropertyValue("display");

    if (currentState === "none") {
      navBar.style.setProperty("display", "flex", "important");
      menuBtn.classList.add("active");
    } else {
      navBar.style.setProperty("display", "none", "important");
      menuBtn.classList.remove("active");
    }
  });

  /**
   * Обрабатываем скролл по странице
   */
  window.addEventListener("scroll", (e) => {
    const y = window.pageYOffset;

    // Уплывает фон RESUME
    if (y > 0 && y < 900) {
      hero.style.backgroundPositionX = `-${y}px`;
    } else {
      hero.style.backgroundPositionX = "0px";
    }

    // Вытягивается фон services
    if (y > 900 && y < 1200) {
      services.style.backgroundSize = `${y - 366}px 453px`;
    }
  });
})();
