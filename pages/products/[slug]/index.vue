<script setup lang="ts">
const { findOne } = useStrapi();
import type { Category } from "~/types/app";

const route = useRoute();

const response = await findOne<any>("categories", {
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
});

const category = computed(() => (response.data as any)[0]) as unknown as Ref<{
  attributes: Category;
}>;

console.log(category.value.attributes);
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
                <li><a href="index.html">Home</a></li>
                <li><a href="project-grid.html">Category</a></li>
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
  <section class="section white">
    <div class="container">
      <!-- ***** Section Title Start ***** -->
      <div class="row">
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
      </div>
      <!-- ***** Section Title End ***** -->

      <div class="row project-grid">
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
                v-if="product?.attributes?.image?.data?.attributes?.url"
                :src="getImageUrl(product.attributes.image.data.attributes.url)"
                alt=""
              />
            </div>
            <div class="text">
              <h3>{{ product.attributes.title }}</h3>
              <p>
                Proin luctus odio et purus iaculis, et porta ex molestie.
                Curabitur euismod nulla enim.
              </p>
            </div>
          </NuxtLink>
        </div>
        <!-- <div class="col-lg-4 col-md-6 col-sm-12">
          <a href="project-single.html" class="project-grid-item">
            <div class="img">
              <img src="assets/images/photos/project/2.jpg" alt="" />
            </div>
            <div class="text">
              <h3>MODERN BATHROOM</h3>
              <p>
                Curabitur nec imperdiet elit. Ut non erat imperdiet, condi men
                tum turpis nec, sceleris que.
              </p>
            </div>
          </a>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <a href="project-single.html" class="project-grid-item">
            <div class="img">
              <img src="assets/images/photos/project/3.jpg" alt="" />
            </div>
            <div class="text">
              <h3>DECORATIVE CHAIR</h3>
              <p>
                Aliquam at eros vitae elit vulputate venenatis sed id augue.
                Nuncmi nisl, pulvinar.
              </p>
            </div>
          </a>
        </div> -->
      </div>
    </div>
  </section>
  <!-- ***** Project End ***** -->
</template>