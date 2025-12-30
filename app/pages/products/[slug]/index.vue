<script setup lang="ts">
import { getCategoryWithProductsQuery } from "~/schemas/grober-queries";
import type { Category } from "~/types/app";

const route = useRoute();
const graphql = useStrapiGraphQL();

const { data: category, status } = await useAsyncData(
  `category-view-${route.params.slug}`,
  async () => {
    try {
      const response = await graphql<any>(getCategoryWithProductsQuery, {
        slug: route.params.slug,
      });

      return (response?.data?.categories?.[0] as Category) || null;
    } catch (error) {
      console.error("Error cargando la categoría:", error);
      return null;
    }
  }
);

const coverImageUrl = computed(() => {
  if (category.value?.image && category.value.image.length > 0) {
    return category.value.image[0]!.url;
  }
  return "";
});

const isLoading = computed(() => status.value === "pending");
</script>

<template>
  <div v-if="category">
    <section class="page">
      <div
        class="cover"
        :data-image="coverImageUrl"
        :style="{ backgroundImage: `url(${coverImageUrl})` }"
      >
        <div class="cover-top">
          <div class="container">
            <div class="row">
              <div class="offset-lg-3 col-lg-6">
                <h1>{{ category.title }}</h1>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <ol class="breadcrumb">
                  <li>
                    <NuxtLink to="/">Home</NuxtLink>
                  </li>
                  <li class="active">{{ category.title }}</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section white" style="padding-top: 1rem">
      <BackBtn style="margin-bottom: 3rem" />
      <div class="container">
        <div v-if="isLoading" class="text-center">Loading products...</div>

        <div v-else class="row project-grid">
          <div
            class="col-lg-4 col-md-6 col-sm-12"
            v-for="product in category.products"
            :key="product.slug"
          >
            <NuxtLink
              :to="`/products/${category.slug}/${product.slug}`"
              class="project-grid-item"
            >
              <div class="img">
                <img
                  v-if="product.images && product.images.length > 0"
                  :src="product.images[0]!.url"
                  :alt="product.images[0]!.name"
                  style="width: 100%; height: 100%; object-fit: cover"
                />
              </div>
              <div class="text">
                <h3>{{ product.title }}</h3>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>

  <div v-else class="container text-center py-5">
    <h2>Category not found</h2>
    <NuxtLink to="/" class="btn btn-primary mt-3">Go Home</NuxtLink>
  </div>
</template>
