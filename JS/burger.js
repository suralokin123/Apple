function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('active');
  }
  
  
  function toggleMenu() {
    var menu = document.querySelector('.menu');
    var hamburgerIcon = document.querySelector('.hamburger-icon');
    var closeIcon = document.querySelector('.close-icon');
  
    menu.classList.toggle('active');
    hamburgerIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
  }
  