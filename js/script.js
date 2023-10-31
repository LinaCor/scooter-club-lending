let allImg = document.querySelectorAll('.slider__item')
let prevButton = document.querySelector('.slider__arrow_prev');
let nextButton = document.querySelector('.slider__arrow_next');
let currentImg = 0;

function currentSlide(n) {
  allImg[currentImg].classList.remove('slider__item_active');
  currentImg = (n + allImg.length) % allImg.length;
  allImg[currentImg].classList.add('slider__item_active');
}

function leftButton() {
  currentSlide(currentImg - 1);
  prevButton.style.opacity = '0.5';
  nextButton.style.opacity = '1';
}


function rigthButton() {
  currentSlide(currentImg + 1);
  nextButton.style.opacity = '0.5';
  prevButton.style.opacity = '1';
}

nextButton.addEventListener('click', rigthButton);
prevButton.addEventListener('click', leftButton);
