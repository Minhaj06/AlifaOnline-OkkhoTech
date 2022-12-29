$(document).ready(function () {
  // Toggle Sidebar
  $(".menu-icon").click(function () {
    $(".sidebar").toggleClass("show-sidebar");
    $(".body-wrapper-freeze").toggleClass("d-block");
  });

  $(".body-wrapper-freeze").click(function () {
    $(".sidebar").toggleClass("show-sidebar");
    $(".body-wrapper-freeze").toggleClass("d-block");
  });
});

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

// init Isotope Filter
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
  spaceBetween: 15,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    360: {
      slidesPerView: 2,
    },
    768: {
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
    360: {
      slidesPerView: 2,
    },
    768: {
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
    el: ".featured-categories .position-relative .swiper-pagination",
    clickable: true,
  },
});

// Testimonial Slider
const testimonialSpeechSwiper = new Swiper(".testimonial-speech-swiper", {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".testimonial-speech .position-relative .swiper-button-next",
    prevEl: ".testimonial-speech .position-relative .swiper-button-prev",
  },
  pagination: {
    el: ".testimonial-speech .swiper-pagination",
    clickable: true,
  },
});
