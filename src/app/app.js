let doc;
doc = document;
doc = document.head;
doc = document.body;
doc = document.doctype;
doc = document.domain;
doc = document.documentURI;
doc = document.URL;
// doc = document.contentType;
// doc = document.characterSet;
// doc = document.links;
// doc = document.links[0].classList;
// doc = document.links[0].className;
// doc = document.images;

// const para = document.createElement('p');
// para.textContent = `My url is ${doc}`;

// document.body.appendChild(para);

const loadPage = (() => {
    
    
    let content = document.querySelector('#content');
    let nav = document.createElement('nav')
    nav.classList.add("navbar", "navbar-expand-md", "navbar-dark", "fixed-top", "bg-dark")
    let brand = document.createElement('a')
    brand.classList.add('navbar-brand')
     brand.setAttribute('href','#');
     brand.textContent = "BeckNCall";
     
    let ul = document.createElement('ul');
    ul.classList.add('nav','nav-tabs');
    let pages = ['home','menu','contact'];
    pages.forEach(page => {
        let list = document.createElement('li');
        list.classList.add('nav-item');
        let link = document.createElement('a');
        link.classList.add('nav-link');
        link.setAttribute('href','#');
        link.textContent = page;
        list.appendChild(link);
        ul.appendChild(list);
        nav.appendChild(brand)
        nav.appendChild(ul)
    })
   
    content.appendChild(nav);
    
    let pageContent = document.createElement('div');
    pageContent.classList.add('pageContent')
    content.appendChild(pageContent);
    
    let footer = document.createElement('footer');
    footer.classList.add('footer', 'p-5');
    footer.innerHTML = `
    <p class="float-right"><a href="#">Back to top</a></p>
				<p>
					&copy; 2017-2020 Company, Inc. &middot;
					<a href="#">Privacy</a> &middot; <a href="#">Terms</a>
				</p>`;
    content.appendChild(footer);


    return {
        nav,
        pageContent
    }
})();

const nav = loadPage.nav;
const pageContent = loadPage.pageContent;

export{
    loadPage,
    nav,
    pageContent
}