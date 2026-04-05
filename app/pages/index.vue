<script setup lang="ts">
import { useSeoMeta } from '#imports';
import { metadata } from '~/assets/data/metadata';
import { jsonld } from '~/assets/data/jsonld';
import { useJsonLd } from '~/composables/useJsonLd';

definePageMeta({
  title: "Home",
});

useSeoMeta(metadata.home);
useJsonLd(jsonld.home);
</script>

<template>
  <HomeWelcome />
  <HomeParallax />
  <HomeFeatures />
  <HomeParallaxTitle />
  <HomeProducts />
  <HomeContactSection />
</template>
