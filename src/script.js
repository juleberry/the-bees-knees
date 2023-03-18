//-----------------------
// animate hamburger menu
//------------------------
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

//---------------
// animate icons
//---------------

const reactIcon = document.getElementById('icon-react')
const jsIcon = document.getElementById('icon-js')
const cssIcon = document.getElementById('icon-css3')
const htmlIcon = document.getElementById('icon-html5')

function animIcon1() {
  reactIcon.classList.add('iconHover')
}

function animIcon2() {
  jsIcon.classList.add('iconHover')
}

function animIcon3() {
  cssIcon.classList.add('iconHover')
}

function animIcon4() {
  htmlIcon.classList.add('iconHover')
}

reactIcon.addEventListener('mouseover', animIcon1);

jsIcon.addEventListener('mouseover', animIcon2);

cssIcon.addEventListener('mouseover', animIcon3);

htmlIcon.addEventListener('mouseover', animIcon4);

function animReset1() {
  reactIcon.classList.remove('iconHover')
}

function animReset2() {
  jsIcon.classList.remove('iconHover')
}

function animReset3() {
  cssIcon.classList.remove('iconHover')
}

function animReset4() {
  htmlIcon.classList.remove('iconHover')
}

reactIcon.addEventListener('mouseout', animReset1);

jsIcon.addEventListener('mouseout', animReset2);

cssIcon.addEventListener('mouseout', animReset3);

htmlIcon.addEventListener('mouseout', animReset4);
