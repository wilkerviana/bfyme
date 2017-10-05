window.addEventListener('load',() => {
  // menu hamburguer
  const menuIcon = document.querySelector('.icon-hamburguer');
  menuIcon.addEventListener('click',() => {
    menuIcon.classList.toggle('active');
    document.querySelector('.menu').classList.toggle('active');
  });
  
  // accordion dúvidas
  const cardQuest = document.querySelectorAll('.card-faq');
  cardQuest.forEach(function(card) {
    const elCard = card;
    const btnQuest = card.children[0].childNodes[3];
    btnQuest.addEventListener('click',() => {
      elCard.classList.toggle('active');
      if (elCard.className == 'card card-faq active') {
        btnQuest.textContent = '-';
      } else{
        btnQuest.textContent = '+';
      }
    });
   });
   
  // modal login
  const btnLogin = document.querySelector('.btn-login2');
  const modalLogin = document.querySelector('.modal');
  const modalOverlay = document.querySelector('.modal-overlay');
  
  btnLogin.addEventListener('click',() => {
    modalOverlay.classList.add('active');
    modalLogin.classList.add('active');
  });
  modalOverlay.addEventListener('click',(event) => {
    modalOverlay.classList.remove('active');
    modalLogin.classList.remove('active');
  });

});

$(document).ready(function(){
  $('.slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: '0',
    centerMode: true,
    prevArrow:"<button type='button' class='slick-prev'><img src='images/assets/arrow_slider-prev.png' /></button>",
    nextArrow:"<button type='button' class='slick-next'><img src='images/assets/arrow_slider-next.png' /></button>",
    responsive: [
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 420,
        settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  });
});


