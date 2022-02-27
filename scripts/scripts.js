// import bicycles from "./constants"

const bicycles = {
  highway: [
    {
      name: "Cervelo Caledonia-5",
      src: "./images/highway-bicycle1.png",
      alt: "Cervelo Caledonia-5 велосипед",
      href: "https://www.sigmasports.com/item/Cervelo/Caledonia-5-Ultegra-Disc-Road-Bike-2021/RDEN"
    },
    {
      name: "Cannondale Systemsix Himod",
      src: "./images/highway-bicycle2.png",
      alt: "Cannondale Systemsix Himod велосипед",
      href: "https://www.sigmasports.com/item/Cannondale/SystemSix-HiMOD-Ultegra-Di2-Disc-Road-Bike-2021/R82J",
    },
    {
      name: "Trek Domane SL-7",
      src: "./images/highway-bicycle3.png",
      alt: "Trek Domane SL-7 велосипед",
      href: "https://www.sigmasports.com/item/Trek/Domane-SL-7-Force-eTap-AXS-Disc-Road-Bike-2021/RULF",
    },
  ],
  gravel: [
    {
      name: "Cervelo Aspero GRX 810",
      src: "./images/gravel-bicycle1.png",
      alt: "Cervelo Aspero GRX 810 велосипед",
      href: "https://www.sigmasports.com/item/Cervelo/Aspero-GRX-810-1x-Disc-Gravel-Bike-2021/RJDE",
    },
    {
      name: "Specialized S-Works Diverge",
      src: "./images/gravel-bicycle2.png",
      alt: "Specialized S-Works Diverge велосипед",
      href: "https://www.sigmasports.com/item/Specialized/S-Works-Diverge-Gravel-Bike-2020/NVJ9"
    },
    {
      name: "Cannondale Topstone Lefty 3",
      src: "./images/gravel-bicycle3.png",
      alt: "Cannondale Topstone Lefty 3 велосипед",
      href: "https://www.sigmasports.com/item/Cannondale/Topstone-Carbon-Lefty-3-Disc-Gravel-Road-Bike-2021/PUC8",
    },

  ],
  tt: [
    {
      name: "Specialized S-Works Shiv",
      src: "./images/tt-bicycle.png",
      alt: "Specialized S-Works Shiv велосипед",
      href: "https://www.sigmasports.com/item/Specialized/S-Works-Shiv-Disc-Limited-Edition-Triathlon-Bike-2019/K8P9"
    },
    {
      name: "BMC Timemachine 01 ONE",
      src: "./images/tt-bicycle2.png",
      alt: "BMC Timemachine 01 ONE велосипед",
      href: "https://www.sigmasports.com/item/BMC/Timemachine-01-One-Force-Disc-TT-Triathlon-Bike-2021/S835"
    },
    {
      name: "Cervelo P-Series",
      src: "./images/tt-bicycle3.png",
      alt: "Cervelo P-Series велосипед",
      href: "https://www.sigmasports.com/item/Cervelo/P-Series-Ultegra-Di2-TT-Triathlon-Bike-2021/RM6Q"
    },

  ]
}

const covers = {
  highway: {
    title: 'Шоссе',
    subtitle: 'На шоссейном велосипеде можно ездить по асфальту на разных градиентах: будь то горы или равнины. Гонки проходят в командном пелотоне, но тренироваться можно и самостоятельно.'
  },
  gravel: {
    title: 'Грэвел',
    subtitle: 'Грэвел похож на шоссейный велосипед, но конструкция рамы немного отличается, и на нём стоят более широкие покрышки, всё для того чтобы проехать по лёгкому бездорожью.'
  },
  tt: {
    title: 'TT',
    subtitle: 'ТТ — это велосипед для триатлона или раздельного старта, гооняют на таком велике только по равнинному асфальту, велик очень быстрые и аэродинамичный.'
  }
}



// bicycles swiper
function initBicyclesSwiper() {
  return new Swiper('.bicycles-swiper', {

    pagination: {
      el: '.bicycles__swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      450: {
        slidesPerView: 2,
        spaceBetween: 60,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 60,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 60,
      },
      1280: {
        effect: 'slide',
        slidesPerView: 3,
        spaceBetween: 60,
      }
    }
  });
}

let bicyclesSwiper = initBicyclesSwiper();

// bicycels elements
const bicycleTemplate = document.querySelector(".bicycles__template").content;
const bicyclePagination = document.querySelector(".bicycles__pagination");
const bicyclePaginationSelect = document.querySelector(".bicycles__pagination-select");
const bicyclesContainer = document.querySelector(".bicycles__swiper-wrapper");
const bicyclesLinks = document.querySelectorAll(".bicycles__pagination-el")

// cover elements
const coverTitle = document.querySelector(".highway__title");
const coverSubtitle = document.querySelector(".highway__subtitle");
const coverRects = document.querySelectorAll(".highway__rectangle");
const coverLines = document.querySelectorAll(".highway__line")

// pagination elements
const paginationElements = document.querySelectorAll(".bicycles__pagination-el")
const highwayPagination = document.querySelector('.highway__pagination');
const slideButtons = document.querySelectorAll(".slide-button");

// theme switcher
const themeSwitchButton = document.querySelectorAll(".switcher__button");
const themeSwitcher = document.querySelectorAll(".switcher__button-label");
let lightTheme = true;

// page
const page = document.querySelector(".page")
const subtitles = document.querySelectorAll(".subtitle");
const links = document.querySelectorAll(".link");


// footer
const footerCopyright = document.querySelector(".footer__copyright");
const footerIcons = document.querySelectorAll(".switcher__icon");
const footer = document.querySelector(".footer");
const footerEmailInput = document.querySelector(".footer__input-email");
const inputContainer = document.querySelector('.input-container');
const footerOkButton = document.querySelector(".footer__ok-button");


// mobile-header
const closeHeaderButton = document.querySelector(".header-phone__button")
const headerPhonePopup = document.querySelector(".header-phone__popup")
const headerPhone = document.querySelector(".header-phone");


// EventListeners for cover slides
slideButtons.forEach(slideButton => {
  slideButton.addEventListener("click", () => {
    const activeSlide = highwayPagination.querySelector(".swiper-slide-active");
    const activeImage = activeSlide.querySelector('.highway__image');
    if (activeImage.classList.contains("highway__image_type_highway")) {
      coverTitle.textContent = covers.highway.title;
      coverSubtitle.textContent = covers.highway.subtitle;
    } else if (activeImage.classList.contains("highway__image_type_gravel")) {
      coverTitle.textContent = covers.gravel.title;
      coverSubtitle.textContent = covers.gravel.subtitle;
    } else if (activeImage.classList.contains("highway__image_type_tt")) {
      coverTitle.textContent = covers.tt.title;
      coverSubtitle.textContent = covers.tt.subtitle;
    }
    coverRects.forEach(rect => {
      rect.classList.remove("highway__rectangle_visible");
    })
    coverLines.forEach(line => {
      line.classList.remove("highway__line_visible");
    })
    activeSlide.querySelector(".highway__rectangle").classList.toggle("highway__rectangle_visible");
    activeSlide.querySelector(".highway__line").classList.toggle("highway__line_visible");
  })
})


// event listener for closing mobile-header
closeHeaderButton.addEventListener("click", () => {
  headerPhonePopup.classList.toggle("menu-popup_opened");
  closeHeaderButton.classList.toggle("header-phone__button_type_open")
  closeHeaderButton.classList.toggle("header-phone__button_type_close")
})


// event listener footer ok input
footerOkButton.addEventListener("click", (e) => {
  e.preventDefault();
  footerEmailInput.value = "Круто!";
})

// event listeners for theme switch
themeSwitchButton.forEach(button => button.addEventListener("click", switchTheme));


// theme switch func
function switchTheme() {
  const bicyclesCardNames = document.querySelectorAll('.bicycles__card-name');
  const titles = document.querySelectorAll(".title");
  page.classList.toggle("page_theme_dark");
  titles.forEach(title => {
    title.classList.toggle("theme-light-title");
    title.classList.toggle("theme-dark-title");
  })
  subtitles.forEach(subtitle => {
    subtitle.classList.toggle("theme-light-subtitle");
    subtitle.classList.toggle("theme-dark-subtitle");
  })
  links.forEach(link => {
    link.classList.toggle("theme-light-link");
    link.classList.toggle("theme-dark-link");
  })
  bicyclesLinks.forEach(bicycleLink => {
    bicycleLink.classList.toggle("theme-light-link_type_bicycles");
    bicycleLink.classList.toggle("theme-dark-link_type_bicycles");
    if (bicycleLink.classList.contains("theme-light-link_active") || bicycleLink.classList.contains("theme-dark-link_active")) {
      bicycleLink.classList.toggle("theme-light-link_active");
      bicycleLink.classList.toggle("theme-dark-link_active");
    }
  })
  footerIcons.forEach(footerIcon => {
    footerIcon.classList.toggle("footer__icon_dark");
  })
  slideButtons.forEach(slideButton => {
    if (slideButton.classList.contains("highway__previous-button")) {
      slideButton.classList.toggle("highway__previous-button_dark")
    } else {
      slideButton.classList.toggle("highway__next-button_dark")
    }
  })

  bicyclesCardNames.forEach(cardName => {
    cardName.classList.toggle("bicycles__card-name_type_light");
    cardName.classList.toggle("bicycles__card-name_type_dark");
  })

  footerOkButton.classList.toggle("footer__ok-button_dark");
  inputContainer.classList.toggle("input-container_dark");

  footer.classList.toggle("footer_dark");
  footerEmailInput.classList.toggle("footer__input-email_dark");
  footerCopyright.classList.toggle("footer__copyright_dark");
  themeSwitcher.forEach(switcher => {
    console.log(switcher);
    switcher.classList.toggle("switcher__button-label_dark")
  });
  headerPhone.classList.toggle("header-phone_dark");
  headerPhonePopup.classList.toggle("menu-popup_dark");
  lightTheme = !lightTheme;
}

// reset bicycles
function resetBicycles() {
  const bicycles = document.querySelectorAll(".bicycles__card");
  for (let i = 0; i < bicycles.length; i++) {
    bicycles[i].remove();
  }
}

// event listeners for bicycles pagination
paginationElements.forEach(paginationEl => {
  paginationEl.addEventListener("click", () => {
    if (lightTheme && !paginationEl.classList.contains("theme-light-link_active")) {
      paginationEl.classList.toggle("theme-light-link_active");
    }
    else if (!lightTheme && !paginationEl.classList.contains("theme-dark-link_active")) {
      paginationEl.classList.toggle("theme-dark-link_active");
    }
  });
  paginationEl.addEventListener("click", () => {
    const paginationElementsWithout = Array.from(paginationElements).filter(el => el !== paginationEl);
    paginationElementsWithout.forEach(element => {
      if (lightTheme) {
        element.classList.remove("theme-light-link_active")
      }
      else {
        element.classList.remove("theme-dark-link_active")
      }
    })
  })
  paginationEl.addEventListener("click", () => {
    if (paginationEl.classList.contains("theme-light-link_active") || paginationEl.classList.contains("theme-dark-link_active")) {
      resetBicycles();
      if (paginationEl.classList.contains("bicycles__pagination-el_type_highway")) {
        addBicycles(bicycles.highway);
      } else if (paginationEl.classList.contains("bicycles__pagination-el_type_gravel")) {
        addBicycles(bicycles.gravel)
      } else if (paginationEl.classList.contains("bicycles__pagination-el_type_tt")) {
        addBicycles(bicycles.tt);
      }
      bicyclesSwiper.destroy(true, true);
      bicyclesSwiper = initBicyclesSwiper();
    };
  })
})


// add all bicycles to page
function addBicycles([...bicycles]) {
  bicycles.forEach(bicycle => {
    addCard(bicyclesContainer, createCard(bicycle.name, bicycle.src, bicycle.alt, bicycle.href));
  })

}


// create bicycle card
function createCard(name, src, alt, href) {
  const bicycleElement = bicycleTemplate.querySelector(".bicycles__card").cloneNode("true");
  const bicycleImage = bicycleElement.querySelector(".bicycles__card-image");
  const bicycleName = bicycleElement.querySelector(".bicycles__card-name");
  bicycleElement.setAttribute("href", href)
  bicycleImage.setAttribute("src", src);
  bicycleImage.setAttribute("alt", alt);
  bicycleName.textContent = name;
  return bicycleElement;
}

// adding card to container
function addCard(container, cardElement) {
  container.append(cardElement);
}

// bicycle pagination event listeners
bicyclePaginationSelect.addEventListener('change', (e) => {
  resetBicycles();
  if (e.target.value === 'highway') {
    addBicycles(bicycles.highway);
  } else if (e.target.value === "gravel") {
    addBicycles(bicycles.gravel);
  } else if (e.target.value === "tt") {
    addBicycles(bicycles.tt);
  }
  bicyclesSwiper.destroy(true, true);
  bicyclesSwiper = initBicyclesSwiper();
});

// add bicycles after loading dom
document.addEventListener("DOMContentLoaded", () => addBicycles(bicycles.highway));


// initializing bicycle swiper while resize
window.addEventListener('resize', () => {
  bicyclesSwiper.destroy(true, true);
  bicyclesSwiper = initBicyclesSwiper();
})
