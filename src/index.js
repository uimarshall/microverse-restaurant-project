import './main.scss';

import './app/alertService';
import { render } from './app/componentService';
import {pageLoad,nav, pageContent} from './app/app';
import {loadHome} from './app/home';

loadHome();

let navLinks = document.querySelectorAll('.nav-link');

nav.addEventListener('click', (event)=>{
    pageContent.innerHTML='';
    if(event.target.innerText === 'home'){
        loadHome();
    }
    // else if(event.target.innerText === 'menu'){
    //     loadMenu();
    // }
    // else if(event.target.innerText === 'contact'){
    //     loadContact();
    // }
    // navLinks.forEach(link => {
    //     if(link.classList.contains('active')){
    //         link.classList.remove('active')
    //     }
    // })
    // console.log(event.target);
    // event.target.classList.add('active');
});

// render();
