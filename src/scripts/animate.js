window.addEventListener('load',() => {
  const menuIcon = document.querySelector('.icon-hamburguer');
  menuIcon.addEventListener('click',() => {
    menuIcon.classList.toggle('active');
    document.querySelector('.menu').classList.toggle('active');
  });
});

$(document).ready(function(){
  $('.slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:"<button type='button' class='slick-prev'><img src='images/arrow_slider-prev.png' /></button>",
    nextArrow:"<button type='button' class='slick-next'><img src='images/arrow_slider-next.png' /></button>",
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  });
});


