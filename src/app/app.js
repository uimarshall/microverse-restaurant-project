
const loadPage = (() => {
  const content = document.querySelector('#content');
  const nav = document.createElement('nav');
  nav.classList.add('navbar', 'navbar-expand-md', 'navbar-dark', 'fixed-top', 'bg-dark');
  const brand = document.createElement('a');
  brand.classList.add('navbar-brand', 'font-weight-bold');
  brand.setAttribute('href', 'index.html');

  brand.textContent = 'BeckNCall';

  const ul = document.createElement('ul');
  ul.classList.add('nav', 'nav-tabs', 'ml-auto');
  const pages = ['home', 'menu', 'contact'];
  pages.forEach(page => {
    const list = document.createElement('li');
    list.classList.add('nav-item');
    const link = document.createElement('a');
    link.classList.add('nav-link');
    link.setAttribute('href', '#');
    link.textContent = page;
    list.appendChild(link);
    ul.appendChild(list);
    nav.appendChild(brand);
    nav.appendChild(ul);
  });

  content.appendChild(nav);

  const pageContent = document.createElement('div');
  pageContent.classList.add('pageContent');
  content.appendChild(pageContent);

  const footer = document.createElement('footer');
  footer.classList.add('footer', 'p-5', 'mt-auto');
  footer.innerHTML = `
  <p class="float-right"><a href="#">Back to top</a></p>
  <p>
  &copy; 2017-2020 Company, Inc. &middot;
  <a href="#">Privacy</a> &middot; <a href="#">Terms</a>
  </p>`;
  content.appendChild(footer);


  return {
    nav,
    pageContent,
  };
})();

const { nav } = loadPage;
const { pageContent } = loadPage;

export {
  loadPage,
  nav,
  pageContent,
};