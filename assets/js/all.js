"use strict";

$(function () {
  // console.log('Hello Bootstrap5');
  var swiper = new Swiper(".artistSwiper", {
    spaceBetween: 24,
    slidesPerView: 1,
    loop: true,
    centeredSlides: true,
    //
    breakpoints: {
      992: {
        slidesPerView: 3
      }
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });
});
//# sourceMappingURL=all.js.map
