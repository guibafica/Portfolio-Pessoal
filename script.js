console.log('');
console.log('Made with 💜 by:');
console.log('Guilherme Bafica 🤘');
console.log('');

$(document).ready(function() {
  $(window).scroll(function() {
    if(this.scrollY > 20) {
      $('.navbar').addClass("sticky");
    } else {
      $('.navbar').removeClass("sticky");
    }

    if(this.scrollY > 500) {
      $('.scroll-up-btn').addClass("show");
    } else {
      $('.scroll-up-btn').removeClass("show");
    }
  });

  // Scrip para o slide-up
  $('.scroll-up-btn').click(function() {
    $('html').animate({ scrollTop: 0 });
  });

  // Script para exibir o navbar/menu
  $('.menu-btn').click(function() {
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
  });

  // Script do Carousel
  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoPlay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },

      600: {
        items: 2,
        nav: false
      },

      1000: {
        items: 3,
        nav: false
      }
    }
  });
});
