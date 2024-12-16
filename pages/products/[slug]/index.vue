<script setup lang="ts">
import { useQuery, useQueryClient } from "@tanstack/vue-query";
import type { Strapi4ResponseMany } from "@nuxtjs/strapi/dist/runtime/types";
import type { CategoryAttributes } from "~/types/app";

const route = useRoute();
const { findOne } = useStrapi();

const queryClient = useQueryClient();

function invalidateCategories() {
  queryClient.invalidateQueries({ queryKey: ["categories"] });
}

const {
  data: category,
  suspense,
  isLoading,
} = useQuery({
  queryKey: ["categories"],
  queryFn: () =>
    findOne("categories", {
      populate: {
        image: true,
        products: {
          populate: ["images"],
        },
      },
      filters: {
        slug: {
          $eq: route.params.slug,
        },
      },
    }) as unknown as Strapi4ResponseMany<CategoryAttributes>,
  select(data) {
    return data.data[0];
  },
});

const imageUrl = computed(() => {
  return getImageUrl(
    category.value?.attributes?.image?.data[0]?.attributes?.url
  );
});

await suspense();

// onMounted(() => {
//   $(".parallax-image").css("display", "none");
//   $(".parallax-slider").css("display", "none");
// });
</script>

<template>
  <section class="page">
    <!-- ***** Page Top Start ***** -->
    <div class="cover" :data-image="imageUrl">
      <div class="cover-top">
        <div class="container">
          <div class="row">
            <div class="offset-lg-3 col-lg-6">
              <h1>{{ category.attributes?.title || "" }}</h1>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <ol class="breadcrumb">
                <li>
                  <NuxtLink to="/" @click="invalidateCategories">Home</NuxtLink>
                </li>
                <li class="active">{{ category.attributes?.title || "" }}</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ***** Page Top End ***** -->
  </section>

  <!-- ***** Project Start ***** -->
  <section class="section white" style="padding-top: 1rem">
    <BackBtn style="margin-bottom: 3rem" />
    <div class="container">
      <!-- ***** Section Title Start ***** -->
      <!-- <div class="row">
        <div class="col-lg-12">
          <div class="center-heading">
            <h2 class="section-title">Smilar Projects</h2>
          </div>
        </div>
        <div class="offset-lg-3 col-lg-6">
          <div class="center-text">
            <p>
              Donec vulputate urna sed rutrum venenatis. Cras consequat magna
              quis arcu elementum, quis congue risus.
            </p>
          </div>
        </div>
      </div> -->
      <!-- ***** Section Title End ***** -->

      <div v-if="!isLoading" class="row project-grid">
        <div
          class="col-lg-4 col-md-6 col-sm-12"
          v-for="product in category.attributes.products.data"
        >
          <NuxtLink
            :to="`/products/${category.attributes.slug}/${product.attributes.slug}`"
            class="project-grid-item"
          >
            <div class="img">
              <img
                v-if="product?.attributes?.images?.data[0]?.attributes?.url"
                :src="
                  getImageUrl(product.attributes.images.data[0].attributes.url)
                "
                alt=""
                style="width: 100%; height: 100%; object-fit: cover"
              />
            </div>
            <div class="text">
              <h3>{{ product.attributes.title }}</h3>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
  <!-- ***** Project End ***** -->
</template>
