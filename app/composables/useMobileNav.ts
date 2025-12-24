// import $ from "jquery";

export default function useMobileNav() {
  function mobileNav() {
    const width = $(window).width();

    $(".submenu").on("click", function () {
      if (width! < 992) {
        $(".submenu ul").removeClass("active");
        $(this).find("ul").toggleClass("active");
      }
    });
  }

  onMounted(() => {
    // Window Resize Mobile Menu Fix
    mobileNav();
  });

  return mobileNav;
}
