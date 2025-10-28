<template>
  <div class="app-root">
    <router-view />
    <AppFooter />
    <Toast />
  </div>
</template>

<script setup>
import AppFooter from './components/AppFooter.vue'
import Toast from './components/Toast.vue'
</script>

<style>
.app-root{
  min-height:100vh;
  /* make transparent so `body` background shows through */
  background: transparent;
}
</style>
