<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import type { Category } from "~/types/app";

const { find } = useStrapi();

const { data: categories, suspense: categoriesSuspense } = useQuery({
  queryKey: ["categories"],
  queryFn: () =>
    find<Category>("categories", {
      populate: "*",
    }) as unknown as Strapi4ResponseMany<CategoryAttributes>,
  select(data) {
    return data.data;
  },
});

await categoriesSuspense();
</script>

<template>
  <section class="section" id="products">
    <div class="container">
      <div class="row justify-content-around">
        <div
          class="col-lg-5 col-md-6 col-sm-12 position-relative"
          v-for="(category, index) in categories"
          :key="category?.attributes?.slug"
        >
          <div class="person-item">
            <div class="img">
              <img
                :src="
                  getImageUrl(
                    category?.attributes?.image?.data[0]?.attributes?.url
                  )
                "
                :alt="category?.attributes?.image?.data[0]?.attributes?.name"
                style="width: 100%; height: 100%; object-fit: cover"
              />
            </div>
            <NuxtLink :to="`/products/${category?.attributes?.slug}`">
              <div class="content" style="cursor: pointer">
                <div class="text">
                  <h5 class="title">{{ category?.attributes?.title }}</h5>
                  <span>
                    {{ category?.attributes?.description }}
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
