//Navbar js

var prevScrollpos = window.scrollY;
window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").classList.remove("fadeOut");
    document.getElementById("navbar").classList.add("fadeIn");
  } else {
    document.getElementById("navbar").classList.remove("fadeIn");
    document.getElementById("navbar").classList.add("fadeOut");
  }
  prevScrollpos = currentScrollPos;
}
