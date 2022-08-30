$('.slider .slider-container .owl-carousel').owlCarousel({
  loop: true,
  margin: 0,
  responsiveClass: true,
  lazyLoad: true,
  center: true,
  navText: [$('.next-slide'), $('.prev-slide')],
  stagePadding: 50,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 3,
      nav: false,
    },
    1000: {
      items: 2.9,
      nav: true,
      dots: false,
      loop: true,
      margin: 10,
    },
  },
})
