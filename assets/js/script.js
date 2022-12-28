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

// Initialize Swiper
const swiper = new Swiper(".swiper", {
  // slidesPerView: 4,
  loop: true,
  spaceBetween: 20,
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
  // direction: getDirection(),
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // on: {
  //   resize: function () {
  //     swiper.changeDirection(getDirection());
  //   },
  // },
});

// function getDirection() {
//   const windowWidth = window.innerWidth;
//   const direction = window.innerWidth <= 760 ? "vertical" : "horizontal";

//   return direction;
// }
