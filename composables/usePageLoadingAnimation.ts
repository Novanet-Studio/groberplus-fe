// import $ from "jquery";

import parallaxImage1 from "~/assets/images/photos/parallax/img.jpg";
import parallaxImage2 from "~/assets/images/photos/parallax/img2.jpg";

export default function usePageLoadingAnimation() {
  function loadPageLoadingAnimation() {
    if ($(".cover").length) {
      $(".cover").parallax({
        imageSrc: $(".cover").data("image"),
        zIndex: "1",
      });
    }

    $(".preloader-wrapper").animate(
      {
        opacity: "0",
      },
      600,
      function () {
        setTimeout(function () {
          // Home Parallax
          if ($(".parallax-image").length) {
            $(".parallax-image").parallax({
              imageSrc: parallaxImage1,
              zIndex: "1",
            });
          }

          // Home Parallax Counterup
          if ($(".parallax-counter").length) {
            $(".parallax-counter").parallax({
              imageSrc: parallaxImage2,
              zIndex: "1",
            });
          }
          $(".preloader-wrapper").css("visibility", "hidden").fadeOut();
        }, 300);
      }
    );
  }

  onMounted(() => {
    // Page loading animation
    window.addEventListener("load", loadPageLoadingAnimation);

    return () => {
      window.removeEventListener("load", loadPageLoadingAnimation);
    };
  });

  return loadPageLoadingAnimation;
}
