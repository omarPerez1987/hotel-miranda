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


const swiperFacilities = new Swiper("#swiper-facilities",{
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el:".swiper-pagination",
  },
  breakpoints:{
    1000:{
      slidesPerView: 3,
      
      grid:{
        fill:"row",
        rows:2,
      }
    }
  }
})