//------------------------
//  Total Configure
//  Made by Aizat Kamal
//------------------------
function openMenu() {
  var x = document.getElementById('menuBlock');
  x.style.width = "100%";
}

function closeMenu() {
  var y = document.getElementById('menuBlock');
  y.style.width = "0";
}

// Scroll to Top button display
window.onscroll = function() {scrollButton()};

function scrollButton() {
  var z = document.getElementById('totop');

  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }
}

// To Top function
function toTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
