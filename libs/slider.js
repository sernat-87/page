const slider = document.querySelector('.swiper-container');

let mySwiper = new Swiper (slider, {
  slidesPerView: 1,
  speed: 400,
  spaceBetween: 30, /* отступ между слайдами */
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1366: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  },
  slideToClickedSlide: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})