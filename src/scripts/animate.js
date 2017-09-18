window.addEventListener('load',() => {
  const menuHamburguer = document.querySelector('.icon-hamburguer');
  
  menuHamburguer.addEventListener('click',() => {
    menuHamburguer.classList.toggle('active');
  });
});
