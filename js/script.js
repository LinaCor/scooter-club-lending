let allImg = document.querySelectorAll('.slider__item')
let prevButton = document.querySelector('.slider__arrow_prev');
let nextButton = document.querySelector('.slider__arrow_next');
let currentImg = 0;

function goToSlide(n) {
  allImg[currentImg].classList.remove('slider__item_active');
  currentImg = (n + allImg.length) % allImg.length;
  allImg[currentImg].classList.add('slider__item_active');
}

function nextSlide() {
  goToSlide(currentImg + 1);
  nextButton.style.opacity = '0.5';
  prevButton.style.opacity = '1';
}

function pervSlide() {
  goToSlide(currentImg - 1);
  prevButton.style.opacity = '0.5';
  nextButton.style.opacity = '1';
}

prevButton.addEventListener('click', pervSlide);
nextButton.addEventListener('click', nextSlide);

