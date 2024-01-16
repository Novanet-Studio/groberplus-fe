export default function welcomeFix() {
  const height = ref<number>();
  const wwidth = ref<number>();

  function welcomeFix() {
    const welcome = $(".welcome");
    if (welcome.length) {
      height.value = $(window).height();
      wwidth.value = $(window).width();

      if (wwidth.value! > 992) {
        welcome.css("height", height!.value!);
        const sliderPosition = $(".slider-position")!.offset()!.left;

        $(".slider-wrapper").css({
          left: sliderPosition,
          width: wwidth.value! - sliderPosition,
          position: "absolute",
        });
      } else {
        welcome.css("height", "auto");
        $(".slider-wrapper").css({
          left: "0px",
          width: "100%",
          position: "relative",
        });
      }
    }
  }

  onMounted(() => {
    // Welcome area set position
    welcomeFix();
  });

  return welcomeFix;
}
