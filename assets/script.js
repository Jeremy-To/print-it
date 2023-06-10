const slides = [
	{
		image: 'slide1.jpg',
		tagLine: 'Impressions tous formats <span>en boutique et en ligne</span>',
	},
	{
		image: 'slide2.jpg',
		tagLine:
			'Tirages haute définition grand format <span>pour vos bureaux et events</span>',
	},
	{
		image: 'slide3.jpg',
		tagLine: 'Grand choix de couleurs <span>de CMJN aux pantones</span>',
	},
	{
		image: 'slide4.png',
		tagLine: 'Autocollants <span>avec découpe laser sur mesure</span>',
	},
];
document.addEventListener('DOMContentLoaded', function () {
	const arrowLeft = document.getElementById('arrow_left');
	const arrowRight = document.getElementById('arrow_right');
	const dotsContainer = document.querySelector('.dots');
	const bannerImage = document.querySelector('.banner-img');
	const bannerText = document.querySelector('#banner p');
	let activeIndex = 0;
	let dots = [];

	arrowLeft.addEventListener('click', slideLeft);
	arrowRight.addEventListener('click', slideRight);

	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement('div');
		dot.classList.add('dot');
		if (i === activeIndex) {
			dot.classList.add('dot_selected');
		}
		dot.addEventListener('click', () => {
			changeSlide(i);
		});
		dotsContainer.appendChild(dot);
		dots.push(dot);
	}

	function changeSlide(index) {
		activeIndex = index;
		bannerImage.src = './assets/images/slideshow/' + slides[index].image;
		dotsContainer
			.querySelector('.dot_selected')
			.classList.remove('dot_selected');
		dots[index].classList.add('dot_selected');
		bannerText.innerHTML = slides[index].tagLine;
	}
	function slideLeft() {
		activeIndex = activeIndex > 0 ? activeIndex - 1 : slides.length - 1;
		changeSlide(activeIndex);
	}

	function slideRight() {
		activeIndex = activeIndex < slides.length - 1 ? activeIndex + 1 : 0;
		changeSlide(activeIndex);
	}
});
