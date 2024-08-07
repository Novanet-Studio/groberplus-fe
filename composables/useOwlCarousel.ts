// import $ from "jquery";

export default function useOwlCarousel() {
  function loadCarousel() {
    if ($(".owl-carousel").length) {
      const welcomeSlider = $(".owl-carousel");
      welcomeSlider.owlCarousel({
        loop: true,
        // margin: 10,
        nav: false,
        margin: 30,
        responsive: {
          0: {
            items: 1.5,
          },
          600: {
            items: 2.5,
          },
          1000: {
            items: 2.5,
          },
        },
      });

      checkClasses();
      welcomeSlider.on("translated.owl.carousel", function (event) {
        checkClasses();
      });

      welcomeSlider.css("opacity", "0");
      welcomeSlider.animate(
        {
          opacity: 1,
        },
        600
      );

      function checkClasses() {
        var total = $(".owl-carousel .owl-stage .owl-item.active").length;

        $(".owl-carousel .owl-stage .owl-item").removeClass("firstActiveItem");

        $(".owl-carousel .owl-stage .owl-item.active").each(function (index) {
          if (index === 0) {
            $(this).addClass("firstActiveItem");
          }
        });
      }

      $(".base .prev").on("click", function () {
        welcomeSlider.trigger("prev.owl.carousel");
      });

      $(".base .next").on("click", function () {
        welcomeSlider.trigger("next.owl.carousel");
      });
    }
  }

  onMounted(() => {
    // Welcome area init
    setTimeout(() => {
      loadCarousel();
    }, 500);
  });

  return loadCarousel;
}
