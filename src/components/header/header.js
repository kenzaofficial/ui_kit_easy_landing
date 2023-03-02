// eslint-disable-next-line no-undef
const doc = document;

doc.addEventListener('DOMContentLoaded', () => {
  const headerBurger = doc.querySelector('.header__burger-button');
  const menuLink = doc.querySelectorAll('.menu__link');
  const body = doc.querySelector('body');
  const headerBody = doc.querySelector('.header__body');
  const overlay = doc.querySelector('.overlay');

  window.onscroll = function () {
    headerScrolled();
  };

  function headerScrolled() {
    const header = document.querySelector('.header');

    if (doc.body.scrollTop > 40 || doc.documentElement.scrollTop > 40) {
      header.classList.add('header--is-scrolled');
    } else {
      header.classList.remove('header--is-scrolled');
    }
  }

  if (body.classList.contains('no-js')) {
    body.classList.remove('no-js');
  }

  headerBurger.addEventListener('click', () => {
    headerBody.classList.toggle('header-menu--is-active');
    body.classList.toggle('scroll-lock');
    overlay.classList.toggle('visually-hidden');
  });

  overlay.addEventListener('click', () => {
    headerBody.classList.remove('header-menu--is-active');
    body.classList.remove('scroll-lock');
    overlay.classList.add('visually-hidden');
  });

  for (let i = 0; i < menuLink.length; i += 1) {
    menuLink[i].addEventListener('click', () => {
      headerBody.classList.remove('header-menu--is-active');
      body.classList.remove('scroll-lock');
      overlay.classList.add('visually-hidden');
    });
  }
});
