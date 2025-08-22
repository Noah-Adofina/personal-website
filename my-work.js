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






// ===== Project Preview =====

const previewClose = document.querySelector(".preview__close");
previewClose.addEventListener('click', toggleProjectPreview);

const projects = document.querySelectorAll(".project");
const projectPreview = document.querySelector(".preview");
const projectGrid = document.querySelector(".grid");

// Set more info buttons to fetch and preview project data
projects.forEach((project) => {
  const projectTitle = project.querySelector(".project__title").textContent;
  const moreInfoLink = project.querySelector(".project__info");
  moreInfoLink.addEventListener("click", () => previewProject(projectTitle));
})

// Sets data and toggles visibility
function previewProject(projectTitle) {
  setProjectData(projectTitle);
  toggleProjectPreview();
};


const previewTitle = document.querySelector(".preview__title");
const previewStack = document.querySelector(".preview__stack");
const previewLinks = document.querySelector(".preview__links");
const previewImage = document.querySelector(".preview__image--main")
const previewImages = document.querySelector(".preview__images");
const previewTabs = document.querySelectorAll(".preview__info__tab");
const previewInfoText = document.querySelector(".preview__info__text");
const previewTabsLabel = ['objective', 'implementation', 'results', 'challenges', 'takeaways'];

let projectData;
let projectDataLoaded = false;

// Fetches project data from json
async function loadProjectData() {
  const response = await fetch('./project-entries.json');
  projectData = await response.json();
  projectDataLoaded = true;
}

loadProjectData();

// Sets all of the project data to html elements
function setProjectData(projectTitle){
  if (!projectDataLoaded){
    loadProjectData();
  }
  // Get selected project data
  selectedProjectData = projectData.find(project => project.title === projectTitle);

  // Set project title
  previewTitle.textContent = selectedProjectData.title;

  // Create and append tech stack items
  previewStack.innerHTML = '';
  selectedProjectData.stack.forEach((stack) => {
    const stackEl = document.createElement("li");
    stackEl.textContent = stack;
    stackEl.classList.add("preview__stack__item");
    previewStack.appendChild(stackEl);
  })

  // Create and append links
  previewLinks.innerHTML = '';
  selectedProjectData.links.forEach((link, index) => {
    // Create li and a
    const linkListEl = document.createElement("li");
    const linkEl = document.createElement("a");

    // Add li class
    linkListEl.classList.add("preview__link");

    // Set a href, target, and text
    linkEl.href = link;
    linkEl.setAttribute('target', '_blank'); 
    linkEl.textContent = "[" + selectedProjectData["link-types"][index] + "]";

    // Append a to li
    linkListEl.appendChild(linkEl);

    // Append li to links
    previewLinks.appendChild(linkListEl);
  })

  // Create and append images
  previewImages.innerHTML = '';
  selectedProjectData.images.forEach((image, index) => {
    // Create imgEl and set src and class
    const imgEl = document.createElement("img");
    imgEl.src = image;
    imgEl.classList.add("preview__image--mini");

    // Preload the image for instant switching
    const preloadImg = new Image();
    preloadImg.src = image;

    // Set image preview if first img
    if (index === 0){
      imgEl.classList.add("selected");
      setSelectedImage(imgEl);
    }

    // Append imgEl
    previewImages.appendChild(imgEl);
  })

  // Set image hover events
  const miniImages = previewImages.querySelectorAll('.preview__image--mini');
  miniImages.forEach((img) => {
    img.addEventListener('mouseenter', () => setSelectedImage(img));
  })

  // Set tab events
  previewTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      deselectTabs();
      tab.classList.add("selected");
      setTabData(selectedProjectData[previewTabsLabel[index]])
    });

    // First tab set selected and data
    if (index === 0){
      deselectTabs();
      previewTabs[index].classList.add("selected");
      setTabData(selectedProjectData[previewTabsLabel[index]])
    }
  })
}

// Sets tab data to be viewed
function setTabData(tabData){
  previewInfoText.innerHTML = '';
  previewInfoText.innerHTML = tabData;
}

// Deselects all tabs
function deselectTabs(){
  previewTabs.forEach((tab) => {
    if (tab.classList.contains('selected')){
      tab.classList.remove('selected');
    }
  })
}

// Toggles preview visibility
function toggleProjectPreview(){
  const previewOpen = !projectPreview.classList.contains("hidden");

  if (!previewOpen) {
    projectGrid.classList.remove("fade-in");
    projectGrid.classList.add("fade-out");

    setTimeout(() => {
      projectGrid.classList.add("hidden");

      projectPreview.classList.remove("hidden", "fade-out");
      projectPreview.classList.add("fade-in");
    }, 300);
  } else {
    projectPreview.classList.remove("fade-in");
    projectPreview.classList.add("fade-out");

    setTimeout(() => {
      projectPreview.classList.add("hidden");

      projectGrid.classList.remove("hidden", "fade-out");
      projectGrid.classList.add("fade-in");
    }, 300);
  }
}





// ===== Image Preview =====

// Sets selected image to preview
function setSelectedImage(imgEl){
  // Deselects all images
  deselectImages();

  // Sets preview image immediately
  previewImage.src = imgEl.src;
  imgEl.classList.add("selected");
}

// Deselects images
function deselectImages(){
  const images = previewImages.querySelectorAll(".preview__image--mini");
  images.forEach((img) => {
    if (img.classList.contains("selected")){
      img.classList.remove("selected");
    }
  })
}