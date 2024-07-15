<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import type { Strapi4ResponseMany } from "@nuxtjs/strapi/dist/runtime/types";
import type { ProductAttributes } from "~/types/app";

const { find } = useStrapi();

const { data: productsResponse, suspense: productsSuspense } = useQuery({
  queryKey: ["products"],
  queryFn: () =>
    find("products", {
      populate: "*",
    }) as unknown as Strapi4ResponseMany<ProductAttributes>,
  select(data) {
    return data;
  },
  staleTime: 1000 * 60 * 5, // 5 minutes
});

const products = computed(() => productsResponse.value?.data);

await productsSuspense();
</script>

<template>
  <section class="page">
    <!-- ***** Page Top Start ***** -->
    <div class="cover" data-image="~/assets/images/photos/cover.jpg">
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
    <!-- ***** Page Top End ***** -->

    <!-- ***** Page Content Start ***** -->
    <div class="page-bottom">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="project-grid">
              <div class="row">
                <div
                  v-for="product in products"
                  :key="product.attributes.slug"
                  class="col-lg-4 col-md-6 col-sm-12"
                >
                  <nuxt-link
                    class="project-grid-item"
                    :to="`/products/${product.attributes.category.data.attributes.slug}/${product.attributes.slug}`"
                  >
                    <div class="img">
                      <img
                        :src="
                          getImageUrl(
                            product.attributes.image.data.attributes.url
                          )
                        "
                        :alt="
                          product.attributes.image.data.attributes
                            ?.alternativeText || 'image'
                        "
                      />
                    </div>
                    <div class="text">
                      <h3>{{ product.attributes.title }}</h3>
                      <!-- <p>
                        {{ product.attributes.description }}
                      </p> -->
                    </div>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ***** Page Content End ***** -->
  </section>
</template>
