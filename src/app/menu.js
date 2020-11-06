
import { pageContent } from './app';

const menuPage = (() => {
  const main = document.createElement('main');
  main.setAttribute('role', 'main');
  const section = document.createElement('section');
  section.classList.add('jumbotron', 'text-center');
  const wrapper = document.createElement('div');
  wrapper.classList.add('container');
  const h1 = document.createElement('h1');
  h1.textContent = 'Checkout Our Menu';
  const p = document.createElement('p');
  p.classList.add('lead', 'text-dark');
  p.textContent = 'Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely';
  wrapper.appendChild(h1);
  wrapper.appendChild(p);
  section.appendChild(wrapper);

  const tiles = document.createElement('div');
  tiles.classList.add('album', 'py-5', 'bg-light');
  tiles.innerHTML = `  <div class="container">
  

      <div class="row">
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
          <img src="https://cdn.pixabay.com/photo/2018/08/10/21/52/restaurant-3597677__340.jpg" alt="food" class="bd-placeholder-img card-img-top" />
           
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
            <img src="https://cdn.pixabay.com/photo/2017/02/15/10/57/pizza-2068272__340.jpg" alt="food" class="bd-placeholder-img card-img-top" />
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
             <img src="https://cdn.pixabay.com/photo/2016/11/29/05/07/baked-goods-1867459__340.jpg" alt="food" class="bd-placeholder-img card-img-top" />
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
             
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
           <img src="https://cdn.pixabay.com/photo/2019/07/17/11/02/neon-sign-4343663__340.jpg" alt="food" class="bd-placeholder-img card-img-top" />
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
             
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
            <img src="https://cdn.pixabay.com/photo/2014/12/21/23/56/hamburger-576419__340.png" alt="food" class="bd-placeholder-img card-img-top" />
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
           <img src="https://cdn.pixabay.com/photo/2017/09/30/15/10/pizza-2802332__340.jpg" alt="food" class="bd-placeholder-img card-img-top" />
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
             
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
            <img src="https://cdn.pixabay.com/photo/2017/06/06/22/37/italian-cuisine-2378729__340.jpg" alt="food" class="bd-placeholder-img card-img-top" />
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
            <img src="https://cdn.pixabay.com/photo/2017/06/26/12/49/red-wine-2443699__340.jpg" alt="food" class="bd-placeholder-img card-img-top" />
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
           <img src="https://cdn.pixabay.com/photo/2017/01/26/02/06/platter-2009590__340.jpg" alt="food" class="bd-placeholder-img card-img-top" />
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
             
            </div>
          </div>
        </div>
      </div>
    </div>`;


  main.appendChild(section);
  main.appendChild(tiles);
  pageContent.appendChild(main);
});

export { menuPage };