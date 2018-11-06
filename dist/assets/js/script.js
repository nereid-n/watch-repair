'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Shared = function Shared() {
  _classCallCheck(this, Shared);
};

var accordionItemTop = document.querySelectorAll('.accordion-item-top');

for (var i = 0; i < accordionItemTop.length; i++) {
  accordionItemTop[i].onclick = function () {
    var accordionItemThis = this.closest('.accordion-item');
    var parent = this.closest('.accordion');
    if (parent.querySelector('.accordion-active')) {
      var activeItem = parent.querySelector('.accordion-active');
      activeItem.classList.remove('accordion-active');
      if (activeItem !== accordionItemThis) {
        accordionItemThis.classList.add('accordion-active');
      }
    } else {
      accordionItemThis.classList.add('accordion-active');
    }
  };
}

if ($('.masters__slider').length > 0) {
  $('.masters__slider').slick({
    slidesToShow: 2,
    prevArrow: '<button class="masters__slider-btn masters__slider-prev"><img src="assets/images/left.png" alt=""></button>',
    nextArrow: '<button class="masters__slider-btn masters__slider-next"><img src="assets/images/right.png" alt=""></button>',
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }]
  });
}
//# sourceMappingURL=script.js.map
