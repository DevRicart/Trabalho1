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

  var swiper = new Swiper(".mySwiperDois", {
    slidesPerView: 2,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // var swiper = new Swiper(".mySwiper-dois", {
  //   slidesPerView: 2,
  //   spaceBetween: 1,
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  //   breakpoints: {
  //     576: {
  //       slidesPerView: 2, // Mostrar 1 slide quando a largura da tela for 576 pixels ou mais
  //     },
  //     768: {
  //         slidesPerView: 3, // Mostrar 2 slides quando a largura da tela for 768 pixels ou mais
  //     },
      
  //     // Adicione mais breakpoints conforme necessário
  // }
  // });



