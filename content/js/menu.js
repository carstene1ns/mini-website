$(function () {
  // Check for click events on the navbar burger icon, toggle menu display
  $(".navbar-burger").on("click", function() {
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
  });
});
