(function ($) {
  "use strict";

  // Scroll animation init
  window.sr = new ScrollReveal();

  // Menu Dropdown Toggle
  if ($(".menu-trigger").length) {
    $(".menu-trigger").on("click", function () {
      $(this).toggleClass("active");
      $(".header-area .nav").slideToggle(200);
    });
  }

  // About me progressbar
  if ($(".skill-wrapper").length) {
    $(".skill-wrapper .skill-item").each(function (index) {
      var val = $(this).find(".line").data("value");
      $(this).find(".line").css("width", val);
    });
  }

  // Home number counterup
  if ($(".count-item").length) {
    $(".count-item strong").counterUp({
      delay: 10,
      time: 1000,
    });
  }

  // Blog cover image
  if ($(".blog-post-single").length) {
    $(".blog-post-single").imgfix();
  }

  // Blog grid cover image
  if ($(".blog-post-grid").length) {
    $(".blog-post-grid").imgfix();
  }

  // Sidebar contact banner image
  if ($(".sidebar .box").length) {
    $(".sidebar .box").imgfix();
  }

  // Project grid cover image
  if ($(".project-grid-item").length) {
    $(".project-grid-item .img").imgfix();
  }

  // Project list cover image
  if ($(".project-list-item").length) {
    $(".project-list-item .img").imgfix();
  }

  // Page standard gallery
  if ($(".page-gallery").length && $(".page-gallery-wrapper").length) {
    $(".page-gallery").imgfix({
      scale: 1.1,
    });

    $(".page-gallery").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
      zoom: {
        enabled: true,
        duration: 300,
        easing: "ease-in-out",
      },
    });
  }

  // Youtube Player
  if ($(".play").length) {
    $(".play").magnificPopup({
      disableOn: 700,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    });
  }
})(window.jQuery);
