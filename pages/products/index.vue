<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import type { Category } from "~/types/app";

const { find } = useStrapi();

const { data: categories, suspense: categoriesSuspense } = useQuery({
  queryKey: ["products"],
  queryFn: () =>
    find<any>("categories", {
      populate: "*",
    }),
  select(data) {
    return data.data;
  },
});

await categoriesSuspense();
</script>

<template>
  <section class="page">
    <!-- ***** Page Top Start ***** -->
    <div
      class="cover"
      :data-image="
        getImageUrl(
          categories?.[0]?.attributes?.image?.data[0]?.attributes?.url
        )
      "
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
    <!-- ***** Page Top End ***** -->

    <BackBtn />

    <!-- ***** Page Content Start ***** -->
    <div class="page-bottom" style="padding-top: 2rem">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="project-grid">
              <div class="row">
                <div
                  v-for="category in categories"
                  :key="category.attributes.slug"
                  class="col-lg-4 col-md-6 col-sm-12"
                >
                  <nuxt-link
                    class="project-grid-item"
                    :to="`/products/${category.attributes.slug}`"
                  >
                    <div class="img">
                      <img
                        style="width: 100%; height: 100%; object-fit: cover"
                        v-if="
                          category?.attributes?.image?.data[0]?.attributes?.url
                        "
                        :src="
                          getImageUrl(
                            category?.attributes?.image?.data[0]?.attributes
                              ?.url
                          )
                        "
                        :alt="
                          category?.attributes?.image?.data[0].attributes
                            ?.alternativeText || 'image'
                        "
                      />
                    </div>
                    <div class="text">
                      <h3>{{ category.attributes.title }}</h3>
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
