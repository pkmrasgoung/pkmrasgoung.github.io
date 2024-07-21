window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar-menu");
  if (window.scrollY > 600) {
    console.log("terscroll");
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
