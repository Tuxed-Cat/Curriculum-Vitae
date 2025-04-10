let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  currentSlide = (index + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

function moveSlide(step) {
  showSlide(currentSlide + step);
}

// Auto slide every 5 seconds
setInterval(() => {
  moveSlide(1);
}, 5000);

showSlide(currentSlide); // Inicializa