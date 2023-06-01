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
  
  // Scroll To Top
  let scrollTop = document.querySelector('.scrollTop');
  
  window.onscroll = function (){
    this.scrollY >= 1000 ? scrollTop.classList.add('show') : scrollTop.classList.remove('show');
  };
  scrollTop.onclick = function(){
    window.scrollTo({
      top: 0,
      behavior:'smooth'
    });
  };


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
// End Button Popup
