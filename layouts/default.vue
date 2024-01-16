<script setup lang="ts">
useOwlCarousel();
usePageLoadingAnimation();
</script>

<template>
  <AppHeader />
  <slot />
  <AppFooter />
</template>
