const navBurger = document.querySelector('.nav__burger');
const navList = document.querySelector('.nav__list');
const navCart = document.querySelector('.nav__cart');

navBurger.addEventListener('click', () => {
  navCart.classList.toggle('nav__cart--unvisible');
  navList.classList.toggle('nav__list--visible');
});
