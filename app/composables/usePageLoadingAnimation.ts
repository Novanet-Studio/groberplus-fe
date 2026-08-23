// import $ from "jquery";

export default function usePageLoadingAnimation() {
  function loadPageLoadingAnimation() {
    if ($(".cover").length) {
      $(".cover").parallax({
        imageSrc: $(".cover").data("image"),
      });
    }

    $(".preloader-wrapper").animate(
      {
        opacity: "0",
      },
      600,
      function () {
        setTimeout(function () {
          $(".preloader-wrapper").css("visibility", "hidden").fadeOut();
        }, 300);
      },
    );
  }

  onMounted(() => {
    // Page loading animation
    if (document.readyState === "complete") {
      loadPageLoadingAnimation();
    } else {
      useEventListener(window, "load", loadPageLoadingAnimation);
    }
  });

  return loadPageLoadingAnimation;
}
