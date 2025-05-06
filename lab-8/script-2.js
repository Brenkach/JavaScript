// Змінні для кнопок і слайдера
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');

let currentIndex = 0;

// Функція для переміщення слайдера
function moveSlider() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Функція для переходу до наступного слайду
function nextSlide() {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  moveSlider();
}

// Функція для переходу до попереднього слайду
function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = slides.length - 1;
  }
  moveSlider();
}

// Обробка кліків на кнопки
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
