<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-left">Ticket App — built with Vue</div>
      <div class="footer-right">© {{ year }}</div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data(){ return { year: new Date().getFullYear() } }
}
</script>

<style scoped>
.site-footer{ margin-top:40px; padding:20px 0; background:transparent }
.container{ max-width:1440px; margin:0 auto; padding:0 16px; display:flex; justify-content:space-between; color:#6b7280 }
</style>
