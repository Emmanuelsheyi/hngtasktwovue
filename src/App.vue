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
  background: #f7f9fc;
}
</style>
