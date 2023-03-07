const menuBtn = document.querySelector('.hamburger_icon');
const navBar = document.querySelector('nav');
const menuItems = [...document.querySelectorAll('nav li a')];

function toggleMenuBtn() {
  if (menuBtn.src.includes('hamburger')) {
    menuBtn.src = 'img/cancel-icon.svg';
  } else {
    menuBtn.src = 'img/hamburger-icon.svg';
  }
}

function displayMenu() {
  if (window.innerWidth < 768) { navBar.classList.toggle('show_menu'); }
  toggleMenuBtn();
}

function displayMenuSection() {
  navBar.classList.remove('show_menu');
  menuBtn.src = 'img/hamburger-icon.svg';
}

menuBtn.addEventListener('click', displayMenu);
menuItems.forEach((item) => item.addEventListener('click', displayMenuSection));


// function that returns the projects section

const projectSection = document.querySelector('.work_section');

const projects = [
  {
    id: 1,
    name: 'Keeping track of hundreds of components',
    featured_image_mobile: 'img/mobile-details-image.svg',
    featured_image_desktop: 'img/desktop-details-image.svg',
    featured_image_desktop: 'img/desktop-details-image.svg',
    technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
    live_source: '#',
    live_link: '#'
  },
  {
    id: 1,
    name: 'Keeping track of hundreds of components',
    featured_image_mobile: 'img/mobile-details-image.svg',
    featured_image_desktop: 'img/desktop-details-image.svg',
    featured_image_desktop: 'img/desktop-details-image.svg',
    technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
    live_source: '#',
    live_link: '#'
  },
  {
    id: 1,
    name: 'Keeping track of hundreds of components',
    featured_image_mobile: 'img/mobile-details-image.svg',
    featured_image_desktop: 'img/desktop-details-image.svg',
    featured_image_desktop: 'img/desktop-details-image.svg',
    technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
    live_source: '#',
    live_link: '#'
  },
  {
    id: 1,
    name: 'Keeping track of hundreds of components',
    featured_image_mobile: 'img/mobile-details-image.svg',
    featured_image_desktop: 'img/desktop-details-image.svg',
    featured_image_desktop: 'img/desktop-details-image.svg',
    technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
    live_source: '#',
    live_link: '#'
  },
  {
    id: 1,
    name: 'Keeping track of hundreds of components',
    featured_image_mobile: 'img/mobile-details-image.svg',
    featured_image_desktop: 'img/desktop-details-image.svg',
    featured_image_desktop: 'img/desktop-details-image.svg',
    technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
    live_source: '#',
    live_link: '#'
  },
  {
    id: 1,
    name: 'Keeping track of hundreds of components',
    featured_image_mobile: 'img/mobile-details-image.svg',
    featured_image_desktop: 'img/desktop-details-image.svg',
    featured_image_desktop: 'img/desktop-details-image.svg',
    technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
    live_source: '#',
    live_link: '#'
  },
]

function createProjectsSection() {
const projectDetails = 
  `<article class="card">
    <div class="project_image"></div>
    <div class="project_details">
      <h2>Multi-Post Stories<br />Gain + Glory</h2>
      <ul class="project_stack">
      </ul>
      <a href="#" class="see_project">See Project</a>
    </div>
  </article>`

  for (let i =0; i < projects.length; i++) {
    projectSection.innerHTML += projectDetails;
  }
}

window.addEventListener('load', createProjectsSection)
