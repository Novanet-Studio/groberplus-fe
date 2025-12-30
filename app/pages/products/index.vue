<script setup lang="ts">
import { getCategoriesQuery } from "~/schemas/grober-queries";
import type { Category } from "~/types/app";

const graphql = useStrapiGraphQL();

const { data: categories } = await useAsyncData(
  "products-page-list",
  async () => {
    try {
      const response = await graphql<any>(getCategoriesQuery);

      if (response?.data?.categories) {
        return response.data.categories as Category[];
      }
      return [];
    } catch (error) {
      console.error("Error cargando productos:", error);
      return [];
    }
  },
  {
    default: () => [],
  }
);

const heroCoverImage = computed(() => {
  if (categories.value && categories.value.length > 0) {
    const firstCategory = categories.value[0];

    if (firstCategory?.image && firstCategory.image.length > 0) {
      return firstCategory.image[0]!.url;
    }
  }
  return "";
});
</script>

<template>
  <section class="page">
    <div
      class="cover"
      v-if="heroCoverImage"
      :data-image="heroCoverImage"
      :style="{ backgroundImage: `url(${heroCoverImage})` }"
    >
      <div class="cover-top">
        <div class="container">
          <div class="row">
            <div class="offset-lg-3 col-lg-6">
              <h1>Products</h1>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <ol class="breadcrumb">
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li class="active">Products</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>

    <BackBtn />

    <div class="page-bottom" style="padding-top: 2rem">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="project-grid">
              <div class="row">
                <div
                  v-for="category in categories"
                  :key="category.slug"
                  class="col-lg-4 col-md-6 col-sm-12"
                >
                  <nuxt-link
                    class="project-grid-item"
                    :to="`/products/${category.slug}`"
                  >
                    <div class="img">
                      <img
                        style="width: 100%; height: 100%; object-fit: cover"
                        v-if="category.image && category.image.length > 0"
                        :src="category.image[0]!.url"
                        :alt="category.image[0]!.name || category.title"
                      />
                    </div>
                    <div class="text">
                      <h3>{{ category.title }}</h3>
                    </div>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
