import { pageContent } from './app';

const homePage = (() => {
  const main = document.createElement('main');
  main.setAttribute('role', 'main');
  const carousel = document.createElement('div');
  carousel.id = 'myCarousel';
  carousel.className = 'carousel slide';
  carousel.setAttribute('data-ride', 'carousel');

  const copy = document.createElement('div');
  copy.classList.add('carousel-caption');

  const copyTitle = document.createElement('h1');
  copyTitle.textContent = 'Tasty! I like It yum! yum!...';
  copy.appendChild(copyTitle);

  const bannerParagraph = document.createElement('p');
  bannerParagraph.textContent = `THE MOST INTERESTING FOOD IN THE WORLD! Discover the sumptous aromas 
of foodfun.`;
  copy.appendChild(bannerParagraph);
  const bannerParagraphLink = document.createElement('p');
  const link = document.createElement('a');
  bannerParagraphLink.appendChild(link);
  copy.appendChild(bannerParagraphLink);

  carousel.innerHTML = `<ol class="carousel-indicators">
<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
<li data-target="#myCarousel" data-slide-to="1"></li>
<li data-target="#myCarousel" data-slide-to="2"></li>
</ol>
<div class="carousel-inner">
<div class="carousel-item active">
		<img src="https://cdn.pixabay.com/photo/2017/01/26/02/06/platter-2009590__340.jpg" alt="guarantee" />
		<div class="container">
			<div class="carousel-caption">
				<h1>Example headline.</h1>
				<p>
					Cras justo odio, dapibus ac facilisis in, egestas eget quam.
					Donec id elit non mi porta gravida at eget metus. Nullam id
					dolor id nibh ultricies vehicula ut id elit.
				</p>
				<p>
					<a class="btn btn-lg btn-primary" href="#" role="button"
						>Browse Menu</a
					>
				</p>
			</div>
		</div>
</div>
<div class="carousel-item">
		<img src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__340.jpg" />
		<div class="container">
			<div class="carousel-caption">
				<h1>Another example headline.</h1>
				<p>
					Cras justo odio, dapibus ac facilisis in, egestas eget quam.
					Donec id elit non mi porta gravida at eget metus. Nullam id
					dolor id nibh ultricies vehicula ut id elit.
				</p>
				<p>
					<a class="btn btn-lg btn-primary" href="#" role="button"
						>Browse menu</a
					>
				</p>
			</div>
		</div>
</div>
<div class="carousel-item">
		<img src="https://cdn.pixabay.com/photo/2017/01/07/20/41/alcohol-1961542__340.jpg" />
		<div class="container">
			<div class="carousel-caption">
				<h1>One more for good measure.</h1>
				<p>
					Cras justo odio, dapibus ac facilisis in, egestas eget quam.
					Donec id elit non mi porta gravida at eget metus. Nullam id
					dolor id nibh ultricies vehicula ut id elit.
				</p>
				<p>
					<a class="btn btn-lg btn-primary" href="#" role="button"
						>Browse menu</a
					>
				</p>
			</div>
		</div>
	</div>
</div>
<a
	class="carousel-control-prev"
	href="#myCarousel"
	role="button"
	data-slide="prev"
>
	<span class="carousel-control-prev-icon" aria-hidden="true"></span>
	<span class="sr-only">Previous</span>
</a>
<a
	class="carousel-control-next"
	href="#myCarousel"
	role="button"
	data-slide="next"
>
	<span class="carousel-control-next-icon" aria-hidden="true"></span>
	<span class="sr-only">Next</span>
</a>`;
  main.appendChild(carousel);
  content.appendChild(main);

  pageContent.appendChild(main);
});

export { homePage };