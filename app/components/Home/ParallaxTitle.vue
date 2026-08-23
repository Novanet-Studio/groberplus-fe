<script setup lang="ts">
import parallaxImage2 from "~/assets/images/photos/parallax/img2.jpg";

onMounted(() => {
  $(".count-item strong").counterUp({
    delay: 10,
    time: 1000,
  });
});
</script>

<template>
  <div
    class="parallax-counter"
    :style="{ backgroundImage: `url(${parallaxImage2})` }"
  >
    <div class="parallax-content">
      <div class="">
        <div class="row">
          <div class="count-item">
            <strong>Products</strong>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
