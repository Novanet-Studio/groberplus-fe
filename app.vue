<script setup lang="ts">
useJsonLd(jsonld.organization);
</script>

<template>
  <NuxtLayout :key="$route.path">
    <NuxtPage />
  </NuxtLayout>
</template>
