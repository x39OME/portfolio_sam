// Toggle Menu
function menuToggle(){
  const toggleMenu = document.querySelector('.toggle');
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
