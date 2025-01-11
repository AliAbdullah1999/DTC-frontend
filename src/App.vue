<template>
  <div id="app">
    <Navbar />
    <RouterView />
    <!-- <Footer /> -->
  </div>
</template>

<script setup>
import Navbar from './components/Nav-bar.vue'
// import Footer from './components/foo-ter.vue'
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
}
</style>
