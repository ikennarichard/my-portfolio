const menuBtn = document.querySelector('.hamburger_icon');
const navBar = document.querySelector('nav');
const menuItems = document.querySelector('nav li a');

menuBtn.addEventListener('click', displayMenu)

function displayMenu() {
  navBar.classList.toggle('show_menu');
}



