window.addEventListener('DOMContentLoaded', () => {

  function classToggle() {
    const navs = document.querySelectorAll('.navbar-items');

    navs.forEach(nav => nav.classList.toggle('navbar-burgerToggle'));
  }
  const burgerMenu = document.querySelector('.navbar-burger');
  burgerMenu.addEventListener('click', classToggle);

});
