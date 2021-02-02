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

  // Script para animação de digitação
  var typed = new Typed(".typing", {
    strings: [
      "Desenvolvedor",
      "Fullstack", 
      "Freelancer", 
      "Baterista", 
      "Programador de Site", 
      "Programador de Aplicativo",
      "Engenheiro da Computação",
      "Representante de Curso"
    ],

    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  var typed = new Typed(".typing-2", {
    strings: [
      "Desenvolvedor", 
      "Fullstack", 
      "Freelancer", 
      "Baterista", 
      "Programador de Site", 
      "Programador de Aplicativo",
      "Engenheiro da Computação",
      "Representante de Curso"
    ],

    typeSpeed: 100,
    backSpeed: 60,
    loop: true
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
