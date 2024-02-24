document.addEventListener("DOMContentLoaded", function () {
  var menuToggle = document.getElementById("menu-toggle");
  var mainNav = document.getElementById("main-nav");
  var navLinks = document.querySelector("#main-nav ul");

  menuToggle.addEventListener("click", function () {
    mainNav.classList.toggle("active");
    navLinks.classList.toggle("active");
  });
});
