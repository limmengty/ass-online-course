const carouselSlide = document.querySelector(".carousel-slide");
const carouselItems = document.querySelectorAll(".carousel-item");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

let currentIndex = 0;
const autoSlideInterval = 5000; // Auto-slide interval in milliseconds

function updateCarousel() {
  carouselSlide.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function showNextSlide() {
  currentIndex = currentIndex < carouselItems.length - 1 ? currentIndex + 1 : 0;
  updateCarousel();
}

function showPrevSlide() {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : carouselItems.length - 1;
  updateCarousel();
}

prevBtn.addEventListener("click", showPrevSlide);
nextBtn.addEventListener("click", showNextSlide);

// Auto-slide
let autoSlide = setInterval(showNextSlide, autoSlideInterval);

// Pause auto-slide on mouse hover and resume on mouse leave
const carouselContainer = document.querySelector(".carousel-container");
carouselContainer.addEventListener("mouseover", () => {
  clearInterval(autoSlide);
});

carouselContainer.addEventListener("mouseleave", () => {
  autoSlide = setInterval(showNextSlide, autoSlideInterval);
});
