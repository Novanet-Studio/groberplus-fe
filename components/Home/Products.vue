<script setup lang="ts">
const { find } = useStrapi();
import type { Category } from "~/types/app";

const categories = await find<Category>("categories", {
  populate: "*",
});
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="row justify-content-around">
        <div
          class="col-lg-5 col-md-6 col-sm-12 position-relative"
          v-for="(category, index) in categories.data"
          :key="category?.attributes?.slug"
        >
          <div class="person-item">
            <div class="img">
              <img
                :src="
                  getImageUrl(
                    category?.attributes?.image?.data?.attributes?.url
                  )
                "
                :alt="category?.attributes?.image?.data?.attributes?.name"
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
