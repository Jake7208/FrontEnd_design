//  hammburg menu

const hamburger = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".mobile-nav");

hamburger.addEventListener("click", function () {
  this.classList.toggle("is-active");
  mobile_menu.classList.toggle("is-active");
});
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

// Get the modal
let modal = document.getElementById("modal");

// Get the button that opens the modal
let btn = document.getElementById("login-button");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
