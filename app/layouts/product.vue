<script setup lang="ts">
const { findOne } = useStrapi();
import type { Strapi4ResponseMany } from "@nuxtjs/strapi/dist/runtime/types";
import type { CategoryAttributes } from "~/types/app";

const route = useRoute();

const { data: category, suspense: categorySuspense } = useQuery({
  queryKey: ["category"],
  queryFn: () =>
    findOne("categories", {
      populate: {
        image: true,
        products: {
          populate: ["image"],
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

const productName = computed(() =>
  (route.params.product as string).split("-").join(" ")
);
</script>

<template>
  <section class="page">
    <!-- ***** Page Top Start ***** -->
    <div
      class="cover"
      :style="{
        backgroundImage: `url(${getImageUrl(
          category.attributes.image?.data?.attributes?.url
        )})`,
      }"
    >
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
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li class="active" v-if="route.params.product">
                  <NuxtLink :to="`/products/${category.attributes.slug}`">
                    {{ category.attributes?.title || "Uncategorized" }}
                  </NuxtLink>
                  {{ category.attributes?.title || "" }}
                </li>
                <li class="active" v-else>
                  {{ category.attributes?.title || "" }}
                </li>
                <li
                  :class="{ active: route.params.product }"
                  v-if="route.params.product"
                >
                  {{ productName }}
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ***** Page Top End ***** -->
  </section>
  <slot />
</template>
