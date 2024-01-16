<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  console.log($(".owl-carousel"));
});
</script>

<template>
  <slot />
</template>
