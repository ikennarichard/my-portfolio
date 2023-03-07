const menuBtn = document.querySelector('.hamburger_icon');
const navBar = document.querySelector('nav');
const menuItems = [...document.querySelectorAll('nav li a')];

menuBtn.addEventListener('click', displayMenu)
menuItems.forEach(item => item.addEventListener('click', displayMenu))

function displayMenu() {
  if (window.innerWidth < 768)
  navBar.classList.toggle('show_menu');
  toggleMenuBtn()
}

function toggleMenuBtn() {
  if (menuBtn.src.includes('hamburger')) {
    menuBtn.src = 'img/cancel-icon.svg'
  } else {
    menuBtn.src = 'img/hamburger-icon.svg'
  }
  menuBtn.style.zIndex = 2
}


