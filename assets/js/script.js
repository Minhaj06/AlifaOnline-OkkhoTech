// Filter Menu Active Toggle
const filterMenu = document.querySelector(".filter-menu");
const filterMenuItem = document.querySelectorAll(".filter-menu li");
// const p_cat = document.querySelectorAll(".p_cat");
// const p_single = document.querySelectorAll(".port_items div");

filterMenuItem.forEach((item) => {
  item.addEventListener("click", function () {
    filterMenuItem.forEach((singleItem) => singleItem.classList.remove("active"));
    this.classList.add("active");
  });
});

// init Isotope
var $grid = $(".grid").isotope({
  // options
});
// filter items on button click
$(".filter-menu").on("click", "li", function () {
  var filterValue = $(this).attr("data-filter");
  $grid.isotope({ filter: filterValue });
});

// Popular Product Slider
const popularProductSwiper = new Swiper(".popular-product-swiper", {
  loop: true,
  spaceBetween: 10,
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: ".popular-product .swiper-button-next",
    prevEl: ".popular-product .swiper-button-prev",
  },
});

// Featured Categories Slider
const featuredCategoriesSwiper = new Swiper(".featured-categories-swiper", {
  loop: true,
  spaceBetween: 10,
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: ".featured-categories .swiper-button-next",
    prevEl: ".featured-categories .swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
