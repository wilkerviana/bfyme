$(document).ready(function(){
  var nav = $('header');
  
  $(window).scroll(function () {
    if ($(this).scrollTop() > 240) {
      nav.addClass("fixed");
    } else {
      nav.removeClass("fixed");
    }
  });

  // function for accordion
  $('.btn-plus').click(function(){
    var cardFaq = $(this).parent().parent();
    cardFaq.toggleClass('active');
    cardFaq.siblings().removeClass('active');
    if (cardFaq.hasClass('active')) {
      $(this).text('-');
    } else{
      $(this).text('+');
    }
  });

  // function for open modal faq
  $('.open-modal-faq').click(function(){
    $('.modal-overlay , .modal').addClass('active');  
  });
  $('.modal-overlay').click(function(){
    $('.modal-overlay , .modal').toggleClass('active');  
  });


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


