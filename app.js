const swiper = new Swiper("#mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1000: {
      slidesPerView: 3,
    },
  },
  mousewheel: true,
  keyboard: true,
});
