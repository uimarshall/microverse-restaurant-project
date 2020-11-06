import './main.scss';

import './app/alertService';
import { pageLoad, nav, pageContent } from './app/app';
import { homePage } from './app/home';
import { menuPage } from './app/menu';
import { contactPage } from './app/contact';

homePage();


const navLinks = document.querySelectorAll('.nav-link');

nav.addEventListener('click', (event) => {
  pageContent.innerHTML = '';
  if (event.target.innerText === 'home') {
    homePage();
  } else if (event.target.innerText === 'menu') {
    menuPage();
  }
  else if(event.target.innerText === 'contact'){
      contactPage();
  }
  navLinks.forEach(link => {
      if(link.classList.contains('active')){
          link.classList.remove('active')
      }
  })
  
  event.target.classList.add('active');
});



