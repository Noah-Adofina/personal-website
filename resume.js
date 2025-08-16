// ===== Animations =====

const label = document.querySelector('.checkbox__label');
const checkbox = document.querySelector('.checkbox');
const planet = document.querySelector('.planet');
let starInterval;


// Return if on mobile
function isMobileDevice() {
  return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}


let isAnimating = !isMobileDevice();


// Initial animation set
if (isAnimating){
  checkbox.textContent = 'X';
  startStars();

  if (!planet.classList.contains('rotate')){
    planet.classList.add('rotate');
  }
}


// Toggles animations
function toggleAnimations() {
  isAnimating = !isAnimating;
  checkbox.textContent = isAnimating ? 'X' : '';
  isAnimating ? startStars() : stopStars();
  planet.classList.toggle('rotate');
}

checkbox.addEventListener('click', toggleAnimations);
label.addEventListener('click', toggleAnimations);





// ===== Stars animation =====
document.addEventListener("DOMContentLoaded", () => {
  if (isAnimating) startStars();
});

function createStar() {
  const sky = document.querySelector('.sky'); // keep it here
  const star = document.createElement('div');
  star.classList.add('star');

  if (Math.random() < 1 / 15) {
    star.classList.add('green');
  } else if (Math.random() < 1 / 35) {
    star.classList.add('orange');
  } else if (Math.random() < 1 / 1000) {
    star.classList.add('pink');
  }

  const topOffset = -400;
  const leftOffset = -400;

  star.style.top = (Math.random() * (window.innerHeight - topOffset) + topOffset) + 'px';
  star.style.left = (Math.random() * (window.innerWidth - leftOffset) + leftOffset) + 'px';

  sky.appendChild(star);
  setTimeout(() => star.remove(), 2000);
}


function startStars() {
  if (!starInterval) {
    starInterval = setInterval(createStar, 750);
  }
}

function stopStars() {
  clearInterval(starInterval);
  starInterval = null;
}





// ===== Hamburger nav menu =====
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav__list");
const fadingElements = [
  document.querySelector(".main"),
  document.querySelector("footer"),
  document.querySelector('.accessibility')
];

hamburger.addEventListener("click", () => {
  const navIsOpen = !navList.classList.contains("hidden");

  if (!navIsOpen) {
    fadingElements.forEach(el => {
      el.classList.remove("fade-in");
      el.classList.add("fade-out");
    });

    setTimeout(() => {
      fadingElements.forEach(el => el.classList.add("hidden"));

      navList.classList.remove("hidden", "fade-out");
      navList.classList.add("fade-in");
    }, 300);
  } else {
    navList.classList.remove("fade-in");
    navList.classList.add("fade-out");

    setTimeout(() => {
      navList.classList.add("hidden");

      fadingElements.forEach(el => {
        el.classList.remove("hidden", "fade-out");
        el.classList.add("fade-in");
      });
    }, 300);
  }
});