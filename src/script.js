const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

function toggleButton() {
  navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton);

function closeNav() {
  navList.classList.remove('show')
}

hamburgerButton.addEventListener('keyup', function(e) {
  if (e.key == "Escape") {
    closeNav();
  }
});


const logo = document.getElementById('jbLogo')
function logoFlip() {
  $('logo').load(function() {
    $(this).addClass("loaded");
  });
}