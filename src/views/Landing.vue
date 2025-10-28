<template>
  <div>
    <NavBar />
    <section class="hero">
      <div class="container hero-inner">
        <div class="hero-left">
          <h1>TicketApp — Manage issues with ease</h1>
          <p class="lead">A lightweight multi-framework ticket manager — this is the Vue implementation.</p>
          <div class="cta">
            <button class="btn primary" @click="$router.push('/auth/signup')">Get Started</button>
            <button class="btn ghost" @click="$router.push('/auth/login')">Login</button>
          </div>
        </div>
        <div class="hero-right">
          <div class="feature-card">Fast ticket CRUD</div>
          <div class="feature-card">Persistent sessions</div>
        </div>
      </div>
      <img src="/src/assets/wave.svg" alt="wave" class="hero-wave" />
      <img src="/src/assets/circle.svg" alt="decor" class="hero-circle" />
    </section>

    <section class="features container">
      <div class="card">Simple auth simulation</div>
      <div class="card">Responsive layout</div>
      <div class="card">Accessible controls</div>
    </section>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
export default { components: { NavBar } }
</script>

<style scoped>
.container{ max-width:1440px; margin:0 auto; padding:0 16px }
.hero{ position:relative; overflow:hidden; padding:60px 0 120px }
.hero-inner{ display:flex; gap:24px; align-items:center; justify-content:space-between }
.hero-left{ flex:1 }
.hero-right{ width:360px; display:flex; flex-direction:column; gap:12px }
.lead{ color:#4b5563 }
.cta{ margin-top:16px }
.feature-card{ background:white; padding:18px; border-radius:12px; box-shadow:0 8px 20px rgba(16,24,40,0.06) }
.hero-wave{ position:absolute; left:0; right:0; bottom:0; width:100%; height:120px }
.hero-circle{ position:absolute; right:40px; top:40px; width:120px; opacity:0.9 }
.features{ display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:16px; margin-top:24px }
.card{ background:white; padding:18px; border-radius:12px; box-shadow:0 6px 18px rgba(0,0,0,0.06) }
@media(max-width:800px){ .hero-inner{ flex-direction:column } .hero-right{ width:100% } }
</style>
