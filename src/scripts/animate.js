window.addEventListener('load',() => {
  const menuIcon = document.querySelector('.icon-hamburguer');
  
  menuIcon.addEventListener('click',() => {
    menuIcon.classList.toggle('active');
    document.querySelector('.menu').classList.toggle('active');
  });
});
