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
  if (window.innerWidth < 768) {
    navBar.classList.toggle('show_menu');
  }
  menuBtn.classList.toggle('change_position');
  toggleMenuBtn();
}

function displayMenuItems() {
  navBar.classList.remove('show_menu');
  menuBtn.src = 'img/hamburger-icon.svg';
}

menuBtn.addEventListener('click', displayMenu);
menuItems.forEach((item) => item.addEventListener('click', displayMenuItems));

const projectSection = document.querySelector('.work_section');

const projects = [
  {
    name: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    see_live_icon: './icons/see-live-icon.svg',
    github_icon: './icons/details-github-icon.svg',
    technologies_mobile: ['Ruby on rails', 'css', 'Javascript', 'html'],
    technologies_desktop: [
      'Codekit',
      'Github',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    live_source: '#',
    live_link: '#',
    mobile_image: './img/mobile-details-image.svg',
    desktop_image: './img/desktop-details-image.svg',
  },
  {
    name: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    see_live_icon: './icons/see-live-icon.svg',
    github_icon: './icons/details-github-icon.svg',
    technologies_mobile: ['Ruby on rails', 'css', 'Javascript', 'html'],
    technologies_desktop: [
      'Codekit',
      'Github',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    live_source: '#',
    live_link: '#',
    mobile_image: './img/mobile-details-image.svg',
    desktop_image: './img/desktop-details-image.svg',
  },
  {
    name: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    see_live_icon: './icons/see-live-icon.svg',
    github_icon: './icons/details-github-icon.svg',
    technologies_mobile: ['Ruby on rails', 'css', 'Javascript', 'html'],
    technologies_desktop: [
      'Codekit',
      'Github',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    live_source: '#',
    live_link: '#',
    mobile_image: './img/mobile-details-image.svg',
    desktop_image: './img/desktop-details-image.svg',
  },
  {
    name: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    see_live_icon: './icons/see-live-icon.svg',
    github_icon: './icons/details-github-icon.svg',
    technologies_mobile: ['Ruby on rails', 'css', 'Javascript', 'html'],
    technologies_desktop: [
      'Codekit',
      'Github',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    live_source: '#',
    live_link: '#',
    mobile_image: './img/mobile-details-image.svg',
    desktop_image: './img/desktop-details-image.svg',
  },
  {
    name: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    see_live_icon: './icons/see-live-icon.svg',
    github_icon: './icons/details-github-icon.svg',
    technologies_mobile: ['Ruby on rails', 'css', 'Javascript', 'html'],
    technologies_desktop: [
      'Codekit',
      'Github',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    live_source: '#',
    live_link: '#',
    mobile_image: './img/mobile-details-image.svg',
    desktop_image: './img/desktop-details-image.svg',
  },
  {
    name: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    see_live_icon: './icons/see-live-icon.svg',
    github_icon: './icons/details-github-icon.svg',
    technologies_mobile: ['Ruby on rails', 'css', 'Javascript', 'html'],
    technologies_desktop: [
      'Codekit',
      'Github',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    live_source: '#',
    live_link: '#',
    mobile_image: './img/mobile-details-image.svg',
    desktop_image: './img/desktop-details-image.svg',
  },
];

function createProjectsSection() {
  for (let i = 0; i < projects.length; i += 1) {
    projectSection.innerHTML += `
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
      <a href ="#" class="see_project" onclick=displayDetailsModal(${i})>See Project</a>
    </div>
  </article>`;
  }
}

window.addEventListener('load', createProjectsSection);

const detailsModal = document.querySelector('.details_section');
// eslint-disable-next-line
function displayDetailsModal(id) {
  detailsModal.style.display = 'block';

  detailsModal.innerHTML = `
  <div class='overlay'>
        <div class='details_modal'>
        <img src='./img/cancel-icon.svg' class='details_cancel' onclick=removeModal() />
          <div class='details_image'>
            <img src="${projects[id].mobile_image}" class='mobile_image'/>
            <img src="${projects[id].desktop_image}" class='desktop_image'/>
          </div>
      
          <h2>${projects[id].name}</h2>
          <ul class="project_stack mobile_tech">
          ${projects[id].technologies_mobile
    .map((item) => `<li>${item}</li>`)
    .join('')}
          </ul>
          <ul class="project_stack desktop_tech">
          ${projects[id].technologies_desktop
    .map((item) => `<li>${item}</li>`)
    .join('')}
          </ul>
          <p class="description">${projects[id].description}</p>
          <div class='details_icons'>
            <a href='#/'class='see_live'>See live <img src="${
  projects[id].see_live_icon
}" class='see_live'/></a>
            <a href='#/'class='github_details'>See Source <img src="${
  projects[id].github_icon
}" class='github'/></a>
          </div>
        </div>
    </div>
    `;
  const removeModal = document.querySelector('.details_cancel');
  removeModal.addEventListener('click', () => {
    detailsModal.style.display = 'none';
  });
}

const form = document.querySelector('form');
const message = document.querySelector('.status');
const formFields = [...form.elements];

function validate(e) {
  e.preventDefault();

  message.style.visibility = 'visible';
  const emailInput = form.elements.email.value;

  const regx = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;

  if (regx.test(emailInput) === false) {
    message.innerText = 'Please email must be lowercase';
    message.style.color = '#E31937';
    return;
  }

  message.innerText = 'Success';
  message.style.color = 'var(--mint)';
  form.submit();
}

function removeMessage() {
  message.style.visibility = 'hidden';
}

formFields.forEach((field) => field.addEventListener('focus', removeMessage));

form.addEventListener('submit', (e) => validate(e));

const submitBtn = document.querySelector('.form_btn');
const inputFields = { name: '', email: '', message: '' };

submitBtn.addEventListener('click', () => {
  inputFields.name = form.elements.fullname.value;
  inputFields.email = form.elements.email.value;
  inputFields.message = form.elements.message.value;
  localStorage.setItem('details', JSON.stringify(inputFields));
});

function getDetails() {
  const details = localStorage.getItem('details');
  const items = JSON.parse(details);
  form.elements.fullname.value = items.name;
  form.elements.email.value = items.email;
  form.elements.message.value = items.message;
}
getDetails();