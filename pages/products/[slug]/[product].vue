<script setup lang="ts">
const { findOne } = useStrapi();
import type { Category } from "~/types/app";

const route = useRoute();

const category = await findOne("categories", {
  populate: "*",
  filters: {
    slug: {
      $eq: route.params.slug,
    },
  },
});
</script>

<template>
  <section class="page">
    <!-- ***** Page Top Start ***** -->
    <div
      class="cover"
      :data-image="
        getImageUrl(category.data?.[0]?.attributes.image?.data?.attributes?.url)
      "
    >
      <div class="cover-top">
        <div class="container">
          <div class="row">
            <div class="offset-lg-3 col-lg-6">
              <h1>{{ category.data?.[0]?.attributes?.title || "" }}</h1>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <ol class="breadcrumb">
                <li><a href="index.html">Home</a></li>
                <li><a href="project-grid.html">Project</a></li>
                <li class="active">Project Single</li>
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
                      src="assets/images/photos/project/single.jpg"
                      class="img-fluid float-left"
                      alt=""
                    />
                    <a
                      href="https://www.youtube.com/watch?v=dPZTh2NKTm4"
                      class="play"
                    >
                      <i class="fa fa-play"></i>
                    </a>
                  </div>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12 align-self-center">
                  <div class="page-single-text">
                    <h5 class="title">MODERN ROOMS</h5>
                    <h6 class="sub-title">
                      Automate & Simplify The Whole Process
                    </h6>
                    <p>
                      Duis aute irure dolor reprehenderit in voluptate velit
                      essle cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint ocaec at cupdatat proident suntin culpa qui officia.
                    </p>
                    <div class="info-list">
                      <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-12">
                          <strong>Location: </strong>
                          <span>New York</span>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12">
                          <strong>Year: </strong>
                          <span>2021</span>
                        </div>
                      </div>
                    </div>
                    <div class="count">
                      <div class="row">
                        <div class="col-lg-4 col-md-4 col-sm-12">
                          <strong>96</strong>
                          <span>Active Users</span>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-12">
                          <strong>190</strong>
                          <span>Active Team</span>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-12">
                          <strong>12</strong>
                          <span>Active Staff</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row page-gallery-wrapper">
                <div class="col-lg-3 col-md-6 col-sm-6 col-6">
                  <a
                    href="assets/images/photos/project/1.jpg"
                    class="page-gallery"
                  >
                    <img src="assets/images/photos/project/1.jpg" alt="" />
                  </a>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-6">
                  <a
                    href="assets/images/photos/project/2.jpg"
                    class="page-gallery"
                  >
                    <img src="assets/images/photos/project/2.jpg" alt="" />
                  </a>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-6">
                  <a
                    href="assets/images/photos/project/3.jpg"
                    class="page-gallery"
                  >
                    <img src="assets/images/photos/project/3.jpg" alt="" />
                  </a>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-6">
                  <a
                    href="assets/images/photos/project/4.jpg"
                    class="page-gallery"
                  >
                    <img src="assets/images/photos/project/4.jpg" alt="" />
                  </a>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-6">
                  <a
                    href="assets/images/photos/project/5.jpg"
                    class="page-gallery"
                  >
                    <img src="assets/images/photos/project/5.jpg" alt="" />
                  </a>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-6">
                  <a
                    href="assets/images/photos/project/6.jpg"
                    class="page-gallery"
                  >
                    <img src="assets/images/photos/project/6.jpg" alt="" />
                  </a>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-6">
                  <a
                    href="assets/images/photos/project/7.jpg"
                    class="page-gallery"
                  >
                    <img src="assets/images/photos/project/7.jpg" alt="" />
                  </a>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-6">
                  <a
                    href="assets/images/photos/project/8.jpg"
                    class="page-gallery"
                  >
                    <img src="assets/images/photos/project/8.jpg" alt="" />
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
        <div class="col-lg-4 col-md-6 col-sm-12">
          <a href="project-single.html" class="project-grid-item">
            <div class="img">
              <img src="assets/images/photos/project/1.jpg" alt="" />
            </div>
            <div class="text">
              <h3>MODERN KITCHENS</h3>
              <p>
                Proin luctus odio et purus iaculis, et porta ex molestie.
                Curabitur euismod nulla enim.
              </p>
            </div>
          </a>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
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
        </div>
      </div>
    </div>
  </section>
  <!-- ***** Project End ***** -->
</template>
