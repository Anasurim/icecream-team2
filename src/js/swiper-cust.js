const swiperCust = new Swiper('.swiper-cust', {
  // Optional parameters
  slidesToShow: 1,
  autoplay: false,
  autoplaySpeed: 3000,
  direction: 'horizontal',
  loop: true,
  speed: 3000,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
