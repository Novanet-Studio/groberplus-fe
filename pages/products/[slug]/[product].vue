<script setup lang="ts">
import MarkdownIt from "markdown-it";
import { useQuery } from "@tanstack/vue-query";
import type { Strapi4ResponseMany } from "@nuxtjs/strapi/dist/runtime/types";
import type { CategoryAttributes, ProductAttributes } from "~/types/app";

const { findOne } = useStrapi();
const route = useRoute();
const markdown = new MarkdownIt();

const { data: categoryResponse, suspense: categorySuspense } = useQuery({
  queryKey: ["categories"],
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
    return data;
  },
  staleTime: 1000 * 60 * 5, // 5 minutes
});

const { data: productResponse, suspense: productSuspense } = useQuery({
  queryKey: ["product", route.params.product],
  queryFn: () =>
    findOne("products", {
      populate: "*",
      filters: {
        slug: {
          $eq: route.params.product,
        },
      },
    }) as unknown as Strapi4ResponseMany<ProductAttributes>,
  select(data) {
    return data;
  },
  staleTime: 1000 * 60 * 5, // 5 minutes
});

const category = computed(() => categoryResponse.value?.data[0]!);
const product = computed(() => productResponse.value?.data[0]!);

await categorySuspense();
await productSuspense();
</script>

<template>
  <section class="page">
    <!-- ***** Page Top Start ***** -->
    <div
      class="cover"
      :data-image="
        getImageUrl(category.attributes.image?.data?.attributes?.url)
      "
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
                <li>
                  <NuxtLink :to="`/products/${category.attributes.slug}`">
                    {{ category.attributes?.title || "Uncategorized" }}
                  </NuxtLink>
                </li>
                <li class="active">
                  {{ product.attributes.title || "Uncategorized" }}
                </li>
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
            <div class="page-single">
              <div class="row margin-bottom-90">
                <div class="col-lg-6 col-md-12 col-sm-12 align-self-center">
                  <div class="page-single-img">
                    <img
                      :src="
                        getImageUrl(
                          product.attributes.image.data.attributes.url
                        )
                      "
                      class="img-fluid float-left"
                      alt=""
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12 align-self-center">
                  <div class="page-single-text">
                    <h5 class="title">{{ product.attributes.title }}</h5>
                    <div
                      v-html="markdown.render(product.attributes.description)"
                    ></div>

                    <img
                      v-if="product.attributes.hasSlowMotion"
                      src="/slow-motion.png"
                      alt="Slow motion icon"
                    />
                  </div>
                </div>
              </div>
              <div class="row page-gallery-wrapper">
                <div
                  v-for="gallery in product.attributes.gallery.data"
                  class="col-lg-3 col-md-6 col-sm-6 col-6"
                  :key="gallery.id"
                >
                  <a
                    :href="getImageUrl(gallery.attributes.url)"
                    class="page-gallery"
                  >
                    <img
                      :src="getImageUrl(gallery.attributes.url)"
                      :alt="gallery.attributes.name"
                    />
                  </a>
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
