const highwaySwiper = new Swiper('.highway__swiper', {
  direction: 'horizontal',
  spaceBetween: 60,
  loop: true,
  slidesPerView: 2,
  navigation: {
    nextEl: '.highway__next-button',
    prevEl: '.highway__previous-button',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 60,
    }
  }
});
