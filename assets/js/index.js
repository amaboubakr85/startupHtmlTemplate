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
      stagePadding: 0,
      dots: false,
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

let themeBtn = document.querySelector('#theme')

themeBtn.addEventListener('click', (e) => {
  e.preventDefault()
  if (e.target.innerText === 'Dark Mode') {
    themeBtn.innerText = 'Light Mode'
    document.querySelector('body').classList.add('dark')
  } else {
    themeBtn.innerText = 'Dark Mode'
    document.querySelector('body').classList.remove('dark')
  }
})
