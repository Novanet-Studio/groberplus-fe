<script setup lang="ts">
useOwlCarousel();
const loadingPageAnimation = usePageLoadingAnimation();
const welcomeFix = useWelcomeFix();
const mobileNav = useMobileNav();

const showLoader = ref(true);

function handleResize() {
  welcomeFix();
  mobileNav();
}

function loadAction() {
  showLoader.value = true;
  handleResize();
  loadingPageAnimation();

  setTimeout(() => {
    showLoader.value = false;
  }, 2000);
}

onMounted(() => {
  loadAction();

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
});
</script>

<template>
  <Transition name="fade">
    <AppPreloader v-if="showLoader" />
  </Transition>
  <AppHeader />
  <slot />
  <AppFooter />
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
