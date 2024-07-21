window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar-menu");
  if (window.scrollY > 630) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
