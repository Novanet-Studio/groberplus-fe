<script setup lang="ts">
const { find } = useStrapi();

const categories = await find("categories", {
  populate: "*",
});
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="row justify-content-around">
        <div
          class="col-lg-5 col-md-6 col-sm-12 position-relative"
          v-for="(category, index) in categories.data"
          :key="category.attributes.slug"
        >
          <div class="person-item">
            <div class="img">
              <img
                :src="
                  getImageUrl(category.attributes.image.data.attributes.url)
                "
                :alt="category.attributes.image.data.attributes.name"
              />
            </div>
            <div class="content">
              <div class="text">
                <h5 class="title">{{ category.attributes.title }}</h5>
                <span>
                  {{ category.attributes.description }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
