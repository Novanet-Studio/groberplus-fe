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
              imageSrc: "/images/photos/parallax/parallax-1.jpg",
              zIndex: "1",
            });
          }

          // Home Parallax Counterup
          if ($(".parallax-counter").length) {
            $(".parallax-counter").parallax({
              imageSrc: "/images/photos/parallax/parallax-2.jpg",
              zIndex: "1",
            });
          }
          $(".preloader-wrapper").css("visibility", "hidden").fadeOut();
        }, 300);
      }
    );
    // $(window).on("load", );
  }

  onMounted(() => {
    // Page loading animation
    window.addEventListener("load", loadPageLoadingAnimation);

    return () => {
      window.removeEventListener("load", loadPageLoadingAnimation);
    };
  });
}
