<template>
  <Header />
  <router-view :key="$route.fullPath"></router-view>
  <Footer />
</template>

<script>
import Header from "./components/layout/header/Header.vue";
import Footer from "./components/layout/footer/Footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
