<script setup lang="ts">
import { getCategoriesQuery } from "~/schemas/grober-queries";
import type { Category } from "~/types/app";

const graphql = useStrapiGraphQL();

const { data: categories } = await useAsyncData(
  "home-categories-list",
  async () => {
    try {
      const response = await graphql<any>(getCategoriesQuery);

      if (response?.data?.categories) {
        return response.data.categories as Category[];
      }

      return [];
    } catch (error) {
      console.error("Error cargando categorías:", error);
      return [];
    }
  },
  {
    default: () => [],
  }
);
</script>

<template>
  <section class="section" id="products">
    <div class="container">
      <div class="row justify-content-around">
        <div
          class="col-lg-5 col-md-6 col-sm-12 position-relative"
          v-for="category in categories"
          :key="category.slug"
        >
          <div class="person-item">
            <div class="img">
              <img
                v-if="category.image && category.image.length > 0"
                :src="category.image[0]!.url"
                :alt="category.image[0]!.name"
                style="width: 100%; height: 100%; object-fit: cover"
              />
            </div>

            <NuxtLink :to="`/products/${category.slug}`">
              <div class="content" style="cursor: pointer">
                <div class="text">
                  <h5 class="title">{{ category.title }}</h5>
                  <span v-if="category.description">
                    {{ category.description }}
                  </span>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
