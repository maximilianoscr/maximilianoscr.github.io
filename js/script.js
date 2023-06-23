/*document.addEventListener('DOMContentLoaded', function() {
  var navbar = document.getElementById('navbar');
  var timer;
  function setNavbarOpacity(opacity) {
    navbar.style.opacity = opacity;
  }
  function resetNavbarOpacity() {
    clearTimeout(timer);
    setNavbarOpacity(1);
    timer = setTimeout(function() {
      setNavbarOpacity(0.1);
    }, 15000);
  }
  navbar.addEventListener('mouseenter', function() {
    clearTimeout(timer);
    setNavbarOpacity(1);
  });
  navbar.addEventListener('mouseleave', function() {
    resetNavbarOpacity();
  });
  resetNavbarOpacity();

});*/
function myFunction() {
  var x = document.getElementById("navbar");
  if (x.className === "") {
    x.className += " responsive";
  } else {
    x.className = "";
  }
}
