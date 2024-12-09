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
});

const category = computed(() => categoryResponse.value?.data[0]!);
const product = computed(() => productResponse.value?.data[0]!);

await categorySuspense();
await productSuspense();

function convertFirstRowToTh(html: string) {
  return html.replace(
    /<tr>(.*?)<\/tr>/,
    (match, p1) =>
      `<tr>${p1.replace(/<td>/g, "<th>").replace(/<\/td>/g, "</th>")}</tr>`
  );
}
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

    <div class="page-bottom">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="page-single">
              <div class="row margin-bottom-90">
                <div class="col-lg-4 col-md-12 col-sm-12 align-self-center">
                  <div class="page-single-img">
                    <img
                      :src="
                        getImageUrl(
                          product.attributes.images.data[0].attributes.url
                        )
                      "
                      class="img-fluid float-left"
                      alt=""
                    />
                  </div>
                </div>
                <div class="col-lg-8 col-md-12 col-sm-12 align-self-center">
                  <div class="page-single-text">
                    <h5 class="title">{{ product.attributes.title }}</h5>
                    <div
                      class="prod-cont-tab"
                      v-html="
                        product?.attributes?.description?.includes('<')
                          ? convertFirstRowToTh(
                              product?.attributes?.description
                            )
                          : markdown.render(
                              product?.attributes?.description || ''
                            )
                      "
                    ></div>

                    <img
                      v-if="product?.attributes?.hasSlowMotion"
                      src="/slow-motion.png"
                      alt="Slow motion icon"
                    />

                    <div class="blueprint-grid">
                      <div
                        v-for="blueprint in product?.attributes?.blueprints
                          ?.data"
                        class="col-lg-3 col-md-6 col-sm-6 col-6 blueprint-item"
                        :key="blueprint.id"
                      >
                        <a
                          :href="getImageUrl(blueprint.attributes.url)"
                          class="page-gallery"
                        >
                          <img
                            :src="getImageUrl(blueprint.attributes.url)"
                            :alt="blueprint.attributes.name"
                            class="blueprint-image"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row page-gallery-wrapper">
                <div
                  v-for="gallery in product?.attributes?.images?.data"
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
                      class="gallery-image"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.blueprint-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 1rem;
}

.blueprint-item {
  width: 150px;
  height: 150px;
}

.blueprint-image,
.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  background-size: cover;
  background-position: center;
}

.prod-cont-tab ul {
  display: inline-block;
  margin: 0;
  list-style: none;
  padding-left: 0;
}

.prod-cont-tab ul li {
  margin: 3px 0;
  padding: 8px;
  background-color: #e3e3e4;
  text-align: center;
}

.prod-cont-tab ul li:first-of-type {
  background: #e21737;
  color: #fff;
  border-top: #e21737 1px solid;
  border-bottom: #e21737 1px solid;
}

.prod-cont-tab ul:nth-child(1) li:first-of-type,
.prod-cont-tab ul.list-prod2 li:first-of-type {
  background: #fff;
  color: #e21737;
  border-bottom: 2px solid #96989a;
  border-top: none;
}

.prod-cont-tab p {
  padding-top: 10px;
}

.prod-cont-tab p b {
  padding: 2px;
  color: #fff;
  background: #e21737;
}

.prod-cont-tab p em {
  font-style: normal !important;
  color: #e21737;
}

.prod-cont-tab table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.prod-cont-tab th,
.prod-cont-tab td {
  border: 2px solid white;
  padding: 4px;
  text-align: center;
}

.prod-cont-tab th {
  background-color: #e21737;
  color: white;
  font-weight: lighter;
}

.prod-cont-tab th:first-child {
  background-color: white;
  color: #e21737;
}

.prod-cont-tab tr {
  background-color: #dbdede;
}

.prod-cont-tab tr:hover {
  background-color: #ddd;
}

@media only screen and (min-width: 320px) {
  .prod-cont-tab ul:nth-child(1),
  .prod-cont-tab ul:nth-child(2),
  .prod-cont-tab ul:nth-child(3),
  .prod-cont-tab ul:nth-child(4) {
    width: 100%;
  }

  .prod-cont-tab img {
    width: 18%;
    padding-bottom: 10px;
  }
}

@media only screen and (min-width: 768px) {
  .prod-cont-tab ul:nth-child(1),
  .prod-cont-tab ul:nth-child(2),
  .prod-cont-tab ul:nth-child(3),
  .prod-cont-tab ul:nth-child(4) {
    width: auto;
  }

  .prod-cont-tab img {
    width: 12%;
  }
}

@media only screen and (min-width: 1024px) {
  .prod-cont-tab img {
    width: 6.5%;
  }
}
</style>
