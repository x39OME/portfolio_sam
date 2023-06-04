// Toggle Menu
function menuToggle(){
  const toggleMenu = document.querySelector('.toggle-menu');
  const section = document.querySelector('section');
  toggleMenu.classList.toggle('active')
  section.classList.toggle('active')
}

// Time & Date (Footer)
setInterval(function(){
  document.getElementById('date').innerHTML = Date();
  },1000);

// Dark Mode
let sec = document.querySelector('body');
let toggle = document.querySelector('.toggle');
toggle.onclick = function() {
    sec.classList.toggle('dark');
  }


// Start Button Popup
const open = document.getElementById("open");
const question = document.getElementById("question");
const close = document.getElementById("close");

open.addEventListener('click', ()=> {
	question.classList.add('show')
});
close.addEventListener('click', ()=> {
	question.classList.remove('show')
});

// Move & Scroll To Top
let scrollToTop = document.querySelector(".scrollTop");

let about = document.querySelector(".about");
let skills = document.querySelector(".skills");
let projects = document.querySelector(".projects");


let transform = document.querySelectorAll(".transform");
let transform2 = document.querySelectorAll(".transform2");
let opacity = document.querySelectorAll(".opacity");


// onscroll
window.onscroll = function () {
  this.scrollY >= 1000 ? scrollToTop.classList.add("show") : scrollToTop.classList.remove("show");

  // About
  if (window.scrollY >= about.offsetTop + -50) {
    transform.forEach((about) => {
      about.style.transform = "translateY(0px)"
      about.style.opacity = "1"
    });
  }
  // skills
  if (window.scrollY >= skills.offsetTop + -50) {
    transform2.forEach((skills) => {
      skills.style.transform = "translateY(0px)"
    });
  }
  // projects
  if (window.scrollY >= projects.offsetTop + -50) {
    opacity.forEach((projects) => {
      projects.style.opacity = "1"
      projects.style.transform = "scale(1)"
    });
  }
};
  // Click Scroll To Back To Top
scrollToTop.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
