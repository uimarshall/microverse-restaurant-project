
import { pageContent } from './app';

const contactPage = (() => {
    

  let div = document.createElement('div')
  div.classList.add("cover-container", "d-flex", "w-100", "h-100", "p-3", "mx-auto", "flex-column","text-center")
  let header= document.createElement('header')
  header.classList.add("masthead", "mb-auto")
  let innerDiv= document.createElement('div')
  let h3= document.createElement('h3')
  h3.classList.add("masthead-brand")
  h3.textContent = "Cover"
  const nav = document.createElement('nav');
nav.classList.add('nav', 'nav-masthead', 'justify-content-center');
const pages = ['home', 'menu', 'contact'];
  pages.forEach(page => {
    
    const link = document.createElement('a');
    link.classList.add('nav-link', 'active');
    link.setAttribute('href', '#');
    link.textContent = page;
    nav.appendChild(link);
     innerDiv.appendChild(h3);
    innerDiv.appendChild(nav);
    // header.appendChild(innerDiv);
  });
   header.appendChild(innerDiv);

  const main = document.createElement('main');
  main.setAttribute('role', 'main');
  main.classList.add('inner', 'cover');

   let h1= document.createElement('h1')
  h1.classList.add("cover-heading")
  h1.textContent = "Contact Us Here!."

  const p = document.createElement('p');
  p.classList.add('lead', 'text-white');
  p.textContent = 'Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.'
  let form = document.createElement('div');
    form.innerHTML=`
     <form class="form-signin">
 

  <div class="form-label-group">
    <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
    <label for="inputEmail">Email address</label>
  </div>

  <div class="form-label-group">
    <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
    <label for="inputPassword">Password</label>
  </div>

  <div class="checkbox mb-3">
    <label>
      <input type="checkbox" value="remember-me"> Remember me
    </label>
  </div>
  <div class="form-label-group">
    <label for="exampleFormControlTextarea1">Any Comment?</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
  
</form>
    `;
  
  main.appendChild(h1);
  main.appendChild(p);
  main.appendChild(form);
  div.appendChild(header)
  div.appendChild(main)
{/* <body class="text-center">
<div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
  <header class="masthead mb-auto">
    <div class="inner">
      <h3 class="masthead-brand">Cover</h3>
      <nav class="nav nav-masthead justify-content-center">
        <a class="nav-link active" href="#">Home</a>
        <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="#">Contact</a>
      </nav>
    </div>
  </header>

  <main role="main" class="inner cover">
    <h1 class="cover-heading">Cover your page.</h1>
    <p class="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
    
  </main>

  <footer class="mastfoot mt-auto">
    <div class="inner">
      <p>Cover template for <a href="https://getbootstrap.com/">Bootstrap</a>, by <a href="https://twitter.com/mdo">@mdo</a>.</p>
    </div>
  </footer>
</div>
</body> */}



    
    pageContent.appendChild(div);
    pageContent.appendChild(form);
});

export{contactPage}