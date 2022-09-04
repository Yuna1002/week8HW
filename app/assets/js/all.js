$(function () {
  // console.log('Hello Bootstrap5');

  var swiper = new Swiper(".artistSwiper", {
    spaceBetween: 24,
    slidesPerView: 1,
    breakpoints: {
      992: {
        slidesPerView: 3,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});
