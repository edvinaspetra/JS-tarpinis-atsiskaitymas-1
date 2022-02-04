
const swiper66 = new Swiper('#section-66 .swiper', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 1,
  loop: true,
  speed: 1500,
autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pouseOnMouseEnter: false
  },

  

  breakpoints:{
      950:{
          slidesPerView: 3,
          slidesPerGroup: 3,
          autoplay: false,

      }
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});




// Swiper SECTION-7

const swiper7 = new Swiper('#section-7 .swiper', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 1,
  loop: true,
  speed: 1500,
autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    pouseOnMouseEnter: false
  },

  

  breakpoints:{
      800:{
          slidesPerView: 3,
          slidesPerGroup: 3

      }
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }

  // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   }
});