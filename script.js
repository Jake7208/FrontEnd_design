let slides = document.querySelectorAll(".slide");
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 5000);

function nextSlide() {
  slides[currentSlide].className = "slide";
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].className = "slide active";
}

let next = document.getElementsByClassName("next")[0];
let prev = document.getElementsByClassName("prev")[0];

next.onclick = function () {
  nextSlide();
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 5000);
};
prev.onclick = function () {
  prevSlide();
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 5000);
};

function prevSlide() {
  slides[currentSlide].className = "slide";
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].className = "slide active";
}
