<script setup lang="ts">
import parallaxImage2 from "~/assets/images/photos/parallax/img2.jpg";
</script>

<template>
  <div
    class="parallax-counter"
    :style="{ backgroundImage: `url(${parallaxImage2})` }"
  >
    <div class="parallax-content">
      <div class="count-item">
        <strong>Products</strong>
      </div>
    </div>
  </div>
</template>
