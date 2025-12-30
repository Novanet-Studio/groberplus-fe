<script setup lang="ts">
import MarkdownIt from "markdown-it";
import {
  getCategoryBySlugQuery,
  getProductBySlugQuery,
} from "~/schemas/grober-queries";
import type { Category, Product } from "~/types/app";

const route = useRoute();
const graphql = useStrapiGraphQL();
const markdown = new MarkdownIt();

const { data: category } = await useAsyncData(
  `category-${route.params.slug}`,
  async () => {
    try {
      const response = await graphql<any>(getCategoryBySlugQuery, {
        slug: route.params.slug,
      });

      return (response?.data?.categories?.[0] as Category) || null;
    } catch (e) {
      console.error(e);
      return null;
    }
  }
);

const { data: product } = await useAsyncData(
  `product-${route.params.product}`,
  async () => {
    try {
      const response = await graphql<any>(getProductBySlugQuery, {
        slug: route.params.product,
      });
      return (response?.data?.products?.[0] as Product) || null;
    } catch (e) {
      console.error(e);
      return null;
    }
  }
);

const coverImage = computed(() => {
  if (product.value?.images && product.value.images.length > 0) {
    return product.value.images[0]!.url;
  }
  return "";
});

function convertFirstRowToTh(html: string) {
  if (!html) return "";
  return html.replace(
    /<tr>(.*?)<\/tr>/,
    (match, p1) =>
      `<tr>${p1.replace(/<td>/g, "<th>").replace(/<\/td>/g, "</th>")}</tr>`
  );
}
</script>

<template>
  <section class="page" v-if="product && category">
    <div
      class="cover"
      :data-image="coverImage"
      :style="{ backgroundImage: `url(${coverImage})` }"
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
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li>
                  <NuxtLink :to="`/products/${category.slug}`">
                    {{ category.title }}
                  </NuxtLink>
                </li>
                <li class="active">
                  {{ product.title }}
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>

    <BackBtn />

    <div class="page-bottom" style="padding-top: 2rem">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="page-single">
              <div class="row margin-bottom-90">
                <div class="col-lg-4 col-md-12 col-sm-12 align-self-center">
                  <div class="page-single-img">
                    <img
                      v-if="product.images && product.images.length > 0"
                      :src="product.images[0]!.url"
                      class="img-fluid float-left"
                      :alt="product.title"
                    />
                  </div>
                </div>

                <div class="col-lg-8 col-md-12 col-sm-12 align-self-center">
                  <div class="page-single-text">
                    <h5 class="title">{{ product.title }}</h5>

                    <div
                      class="prod-cont-tab"
                      v-html="
                        product.description?.includes('<')
                          ? convertFirstRowToTh(product.description)
                          : markdown.render(product.description || '')
                      "
                    ></div>

                    <img
                      v-if="product.hasSlowMotion"
                      src="/slow-motion.png"
                      alt="Slow motion icon"
                      style="width: 4rem; height: 4rem"
                    />

                    <div class="blueprint-grid">
                      <div
                        v-for="blueprint in product.blueprints"
                        class="col-lg-3 col-md-6 col-sm-6 col-6 blueprint-item"
                        :key="blueprint.id"
                      >
                        <a
                          :href="blueprint.url"
                          class="page-gallery"
                          target="_blank"
                        >
                          <img
                            :src="blueprint.url"
                            :alt="blueprint.name"
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
                  v-for="galleryImg in product.images"
                  class="col-lg-3 col-md-6 col-sm-6 col-6"
                  :key="galleryImg.id"
                >
                  <a
                    :href="galleryImg.url"
                    class="page-gallery"
                    target="_blank"
                  >
                    <img
                      :src="galleryImg.url"
                      :alt="galleryImg.name"
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
  <div v-else class="container text-center py-5">
    <p>Loading product...</p>
  </div>
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
