   
const burgerMenu = document.querySelector('.burger-menu');
const headerNav = document.querySelector('.header-nav');
const closeBtn = document.querySelector('.close-btn');

burgerMenu.addEventListener('click', () => {
  headerNav.classList.add('active');
  closeBtn.classList.remove('hide');
});

closeBtn.addEventListener('click', () => {
    headerNav.classList.remove('active');
    closeBtn.classList.add('hide');
})