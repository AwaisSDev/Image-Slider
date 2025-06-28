const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;
let index = 0;

document.getElementById('next').onclick = () => {
  index = (index + 1) % totalSlides;
  updateSlide();
};
document.getElementById('prev').onclick = () => {
  index = (index - 1 + totalSlides) % totalSlides;
  updateSlide();
};

function updateSlide() {
  slides.style.transform = `translateX(-${index * 600}px)`;
}

setInterval(() => {
  index = (index + 1) % totalSlides;
  updateSlide();
}, 3000);
