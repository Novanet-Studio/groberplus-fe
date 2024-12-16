<script setup lang="ts">
const route = useRoute();
const isMenuOpen = ref(false);

const menuItems = [
  {
    name: "Home",
    path: "/",
  },
  // {
  //   name: "Company",
  //   path: "/company",
  // },
  {
    name: "Products",
    path: "/products",
  },
];

function isActive(path: string) {
  return path === route.path;
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
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
            <ul class="nav d-none d-lg-flex">
              <li>
                <NuxtLink to="/">Home</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/products">Products</NuxtLink>
              </li>
              <li>
                <a class="contact-btn" href="#contact">Contact</a>
              </li>
            </ul>
            <ul
              class="nav"
              :style="{
                display: isMenuOpen ? 'block' : 'none',
                transition: 'all 0.2s ease-in-out',
                maxHeight: isMenuOpen ? '500px' : '0',
                overflow: 'hidden',
              }"
            >
              <li v-for="item in menuItems" :key="item.name">
                <NuxtLink
                  :class="{ active: isActive(item.path) }"
                  :to="item.path"
                  >{{ item.name }}</NuxtLink
                >
              </li>
            </ul>
            <a
              class="menu-trigger"
              :class="{ active: isMenuOpen }"
              @click="toggleMenu"
            >
              <span>Menu</span>
            </a>
            <!-- ***** Menu End ***** -->
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>
