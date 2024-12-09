<script setup lang="ts">
import { useQueryClient } from "@tanstack/vue-query";

useOwlCarousel();
const loadingPageAnimation = usePageLoadingAnimation();
const welcomeFix = useWelcomeFix();
const mobileNav = useMobileNav();
const queryClient = useQueryClient();
const router = useRouter();

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

onMounted(() => {
  // Invalidate all queries on route change
  router.beforeEach(() => {
    queryClient.invalidateQueries();
  });
});
</script>

<template>
  <!-- <ClientOnly> -->
  <Transition name="fade">
    <AppPreloader v-if="showLoader" />
  </Transition>
  <AppHeader />
  <slot />
  <AppFooter />
  <!-- </ClientOnly> -->
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
