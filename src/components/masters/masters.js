if ($('.masters__slider').length > 0) {
  $('.masters__slider').slick({
    slidesToShow: 2,
    prevArrow: '<button class="masters__slider-btn masters__slider-prev"><img src="assets/images/left.png" alt=""></button>',
    nextArrow: '<button class="masters__slider-btn masters__slider-next"><img src="assets/images/right.png" alt=""></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
}
