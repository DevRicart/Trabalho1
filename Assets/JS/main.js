class MobileNavbar {
  constructor(mobileMenu, navList, navLinks, line1, line3) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.line1 = document.querySelector(line1);
    this.line3 = document.querySelector(line3);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.line1.classList.toggle(this.activeClass);
    this.line3.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
  ".line1",
  ".line3",
);
mobileNavbar.init();

//  Initialize Swiper 

  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    // autoplay: {
    //   delay: 3500,
    //   disableOnInteraction: false,
    // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  var mySwiperDois = new Swiper('.mySwiperDois', {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
      nextEl: '.mySwiperDois-next',
      prevEl: '.mySwiperDois-prev',
    },
    pagination: {
      el: '.swiper-pagination-dois',
      clickable: true,
    },
  });


  document.querySelector('.mySwiperDois-next').addEventListener('click', function() {
    // Obtém o índice do último slide
    var lastIndex = mySwiperDois.slides.length - 1;
    // Define o índice de destino para os 4 últimos slides
    var targetIndex = lastIndex - 3; // 4 slides a partir do final
    // Navega para o slide de destino
    mySwiperDois.slideTo(targetIndex);
  });

  document.querySelector('.mySwiperDois-prev').addEventListener('click', function() {
    // Define o índice de destino para os 4 primeiros slides
    var targetIndex = 0;
    // Navega para o slide de destino
    mySwiperDois.slideTo(targetIndex);
  });



