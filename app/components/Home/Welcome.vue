<script setup lang="ts">
import { carousel } from "~/data/images";
</script>

<template>
  <div class="welcome">
    <div class="welcome-content">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-12 col-sm-12">
            <div class="welcome-text">
              <h1>Innovation</h1>
              <p>
                We improve and adapt our solutions, providing them an extra
                value by means of new patents, materials and finishes.
              </p>
              <a class="dark-btn" href="#products">
                <span class="show-btn">Know our products</span>
                <span class="hide-btn">Know our products</span>
              </a>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="slider-position">&nbsp;</div>
          </div>
        </div>
      </div>
      <div class="slider-wrapper">
        <div class="base">
          <div class="prev">
            <i class="fa fa-angle-left"></i>
          </div>
          <div class="next">
            <i class="fa fa-angle-right"></i>
          </div>
        </div>
        <div class="owl-carousel">
          <div class="item" v-for="item in carousel" :key="item.alt">
            <div class="img">
              <img :src="item.image" :alt="item.alt" />
            </div>
            <div class="text">
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
