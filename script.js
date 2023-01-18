window.onscroll = function() {
  var navbar = document.querySelector("header");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navbar.style.backgroundColor = "rgba(255,255,255,0.8)";
  } else {
    navbar.style.backgroundColor = "white";
  }
};


function scrollToServices() {
    window.location.hash = "#services";
  }
  
  function scrollToContact() {
    window.location.hash = "#contact";
  }
  