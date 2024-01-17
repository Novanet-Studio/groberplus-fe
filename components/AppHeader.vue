<script setup lang="ts">
const route = useRoute();

const menuItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Company",
    path: "/company",
  },
  {
    name: "Products",
    path: "/products",
  },
];

function isActive(path: string) {
  return path === route.path;
}
</script>

<template>
  <header class="header-area">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="main-nav">
            <!-- ***** Logo Start ***** -->
            <NuxtLink to="/" class="logo">
              <img src="~/assets/images/groberplus-logo.svg" alt="GroberPlus" />
            </NuxtLink>
            <!-- ***** Logo End ***** -->

            <!-- ***** Menu Start ***** -->
            <ul class="nav">
              <li v-for="item in menuItems" :key="item.name">
                <NuxtLink
                  :class="{ active: isActive(item.path) }"
                  :to="item.path"
                  >{{ item.name }}</NuxtLink
                >
              </li>
            </ul>
            <!-- ***** Menu End ***** -->
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>
