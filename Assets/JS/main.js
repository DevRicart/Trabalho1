class MobileNavbar {
  constructor(mobileMenu, navList, navLinks, line1, line3) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.line1 = document.querySelector(line1);
    this.line3 = document.querySelector(line3);
    this.out = document.body.childNodes;
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
    console.log(this.navLinks[0])

  }

  // const line1 = document.querySelector('.line1')
  

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
// Test
// const links = document.querySelectorAll('.nav-list a'); 
//       links.forEach(function(link) {
//         link.addEventListener('click', function() {
//           const menu = document.querySelector('.nav-list')
//           const mobileMenu = document.querySelector('.mobile-menu')
//           const line1 = document.querySelector('.line1')
//           const line3 = document.querySelector('.line3')
//           const navLink = document.querySelector('.nav-link')
//           if(menu.classList.contains('active')) {
//             menu.classList.toggle('active')
//             mobileMenu.classList.toggle('active')
//             line1.classList.toggle('active')
//             line3.classList.toggle('active')
//             navLink.classList.toggle('active')
//           }
//         });
//       });

// ==================== Banner Swiper ====================

  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// ==================== Encarte Swiper ====================
  let swiperCards = new Swiper(".card__container", {
    loop: true,
    spaceBetween: 5,
    slidesPerView: 2,
    cssMode: true,
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints:{
      600: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      968: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

// ==================== Trade Swiper ====================

let swiperTrade = new Swiper(".trade__swiper", {
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,

  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
