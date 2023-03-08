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
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    see_live_icon: './icons/see-live-icon.svg',
    github_icon: './icons/details-github-icon.svg',
    technologies_mobile: ['Ruby on rails', 'css', 'Javascript', 'html'],
    technologies_desktop: ['Codekit', 'Github', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    live_source: '#',
    live_link: '#',
    mobile_image: './img/mobile-details-image.svg',
    desktop_image: './img/desktop-details-image.svg',
  },
  {
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    see_live_icon: './icons/see-live-icon.svg',
    github_icon: './icons/details-github-icon.svg',
    technologies_mobile: ['Ruby on rails', 'css', 'Javascript', 'html'],
    technologies_desktop: ['Codekit', 'Github', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    live_source: '#',
    live_link: '#',
    mobile_image: './img/mobile-details-image.svg',
    desktop_image: './img/desktop-details-image.svg',
  },
  {
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    see_live_icon: './icons/see-live-icon.svg',
    github_icon: './icons/details-github-icon.svg',
    technologies_mobile: ['Ruby on rails', 'css', 'Javascript', 'html'],
    technologies_desktop: ['Codekit', 'Github', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    live_source: '#',
    live_link: '#',
    mobile_image: './img/mobile-details-image.svg',
    desktop_image: './img/desktop-details-image.svg',
  },
  {
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    see_live_icon: './icons/see-live-icon.svg',
    github_icon: './icons/details-github-icon.svg',
    technologies_mobile: ['Ruby on rails', 'css', 'Javascript', 'html'],
    technologies_desktop: ['Codekit', 'Github', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    live_source: '#',
    live_link: '#',
    mobile_image: './img/mobile-details-image.svg',
    desktop_image: './img/desktop-details-image.svg',
  },
  {
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    see_live_icon: './icons/see-live-icon.svg',
    github_icon: './icons/details-github-icon.svg',
    technologies_mobile: ['Ruby on rails', 'css', 'Javascript', 'html'],
    technologies_desktop: ['Codekit', 'Github', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    live_source: '#',
    live_link: '#',
    mobile_image: './img/mobile-details-image.svg',
    desktop_image: './img/desktop-details-image.svg',
  },
  {
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    see_live_icon: './icons/see-live-icon.svg',
    github_icon: './icons/details-github-icon.svg',
    technologies_mobile: ['Ruby on rails', 'css', 'Javascript', 'html'],
    technologies_desktop: ['Codekit', 'Github', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    live_source: '#',
    live_link: '#',
    mobile_image: './img/mobile-details-image.svg',
    desktop_image: './img/desktop-details-image.svg',
  },
]

function createProjectsSection() {

  for (let i =0; i < projects.length; i++) {
    projectSection.innerHTML+= 
    `
    <article class="card">
    <div class="project_image"></div>
    <div class="project_details">
      <h2>Multi-Post Stories<br />Gain + Glory</h2>
      <ul class="project_stack">
      <li>Ruby on rails</li>
      <li>css</li>
      <li>Javascript</li>
      <li>html</li>
      </ul>
      <a href ="#/" class="see_project" onclick=displayDetails(${i})>See Project</a>
    </div>
  </article>`
  }
}


// implement the details modal

function displayDetails(id) {

projectSection.innerHTML +=
  `
  <div class='overlay'>
    <div class='details_modal'>

      <div class='details_image'>
      <img src="${projects[id].mobile_image}" class='mobile_image'/>
      <img src="${projects[id].desktop_image}" class='desktop_image'/>
      </div>

      <img src="./img/cancel-icon.svg"/>
      <h2>${projects[id].name}</h2>

      <ul class="project_stack mobile_tech">
      ${projects[id].technologies_mobile.map(item => `<li>${item}</>`)}
      </ul>

      <ul class="project_stack desktop_tech">
      ${projects[id].technologies_desktop.map(item => `<li>${item}</>`)}
      </ul>

      <p class="description">${projects[id].description}</p>

      <a href='#/' class='see_live see_projects'>See live <img src="${projects[id].see_live_icon}"/></a>

      <a href='#/' class='github_details see_projects'>See Source <img src="${projects[id].github_icon}"/></a>
    </div>
  <div>
  `
}


window.addEventListener('load', createProjectsSection)
