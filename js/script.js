document.addEventListener("DOMContentLoaded", function () {
  var menuToggle = document.getElementById("menu-toggle");
  var mainNav = document.getElementById("main-nav");
  var navLinks = document.querySelector("#main-nav ul");

  menuToggle.addEventListener("click", function () {
    mainNav.classList.toggle("active");
    navLinks.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var text = "Website Designer and Developer.";
  var index = 0;
  var speed = 120;

  function typeWriter() {
    if (index < text.length) {
      document.getElementById("typed-text").innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
});

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});
