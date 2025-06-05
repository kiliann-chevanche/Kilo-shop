const scrollToTopButton = document.getElementById("scrollToTop");

window.addEventListener("scroll", function() {
  if (window.scrollY > 300) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

scrollToTopButton.addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: "smooth" });
});