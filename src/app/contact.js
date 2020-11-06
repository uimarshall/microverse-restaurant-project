
import { pageContent } from './app';

const contactPage = (() => {
  const div = document.createElement('div');
  div.classList.add('cover-container', 'd-flex', 'w-100', 'h-100', 'p-3', 'mx-auto', 'flex-column', 'text-center');


  const main = document.createElement('main');
  main.setAttribute('role', 'main');
  main.classList.add('inner', 'cover');

  const h1 = document.createElement('h1');
  h1.classList.add('cover-heading');
  h1.textContent = 'Contact Us Here!.';

  const p = document.createElement('p');
  p.classList.add('lead', 'text-white');
  p.textContent = 'We are building a hunger free world, that is why our food is affordable and we are open 24hrs in a day, 7 days in a week.';
  const form = document.createElement('div');
  form.innerHTML = `
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
  div.appendChild(main);


  pageContent.appendChild(div);
  pageContent.appendChild(form);
});

export default contactPage;