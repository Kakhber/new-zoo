const mainSwiper = new Swiper('.main-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.btn-next',
    prevEl: '.btn-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const brandSwiper = new Swiper('.brands-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 4,
  spaceBetween: 26,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 26,
    },

    768: {
      slidesPerView: 4,
      spaceBetween: 26,
    },

    1024: {
      slidesPerView: 6,
      spaceBetween: 26,
    },

  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const topAddedSwiper = new Swiper('.top-added-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 4,
  spaceBetween: 26,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 26,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 26,
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 26,
    },

  },
  // Navigation arrows
  navigation: {
    nextEl: '.product-next',
    prevEl: '.product-prev',
  },

});
const lastAddedSwiper = new Swiper('.last-added-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 4,
  spaceBetween: 26,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 26,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 26,
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 26,
    },

  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});



