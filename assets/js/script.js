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
