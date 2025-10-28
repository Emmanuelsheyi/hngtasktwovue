<template>
  <header class="site-header">
    <div class="container nav-inner">
      <div class="brand" @click="$router.push('/')">TicketApp</div>
      <nav class="nav-links">
        <!-- Home link visible to everyone -->
        <button class="btn blue pill" @click="$router.push('/')">Home</button>
        <button v-if="!logged" class="btn ghost" @click="$router.push('/auth/login')">Login</button>
        <button v-if="!logged" class="btn primary" @click="$router.push('/auth/signup')">Get Started</button>
        <div v-if="logged" class="nav-auth">
          <button class="btn blue pill" @click="$router.push('/dashboard')">Dashboard</button>
          <button class="btn blue pill" @click="$router.push('/tickets')">Tickets</button>
          <button class="btn danger" @click="doLogout">Logout</button>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import { getSession, logout } from '../services/auth'
export default {
  name: 'NavBar',
  data(){ return { logged: !!getSession() } },
  watch: {
    '$route'(){ this.logged = !!getSession() }
  },
  methods: {
    doLogout(){ logout(); window.__toast && window.__toast('Logged out', 'info'); this.$router.push('/auth/login') }
  }
}
</script>

<style scoped>
.site-header{ padding:18px 0; }
.nav-inner{ display:flex; justify-content:space-between; align-items:center; max-width:1440px; margin:0 auto; padding:0 16px }
.brand{ font-weight:700; font-size:20px; cursor:pointer }
.nav-links .btn{ margin-left:8px }
.btn{ padding:8px 12px; border-radius:8px; border:1px solid transparent; cursor:pointer }
.btn.primary{ background:#2b6cb0; color:white }
.btn.ghost{ background:transparent; border-color:#d1d5db }
.btn.danger{ background:#ef4444; color:white }

/* Mobile: stack header and make nav-links wrap */
@media (max-width: 700px) {
  .nav-inner{ flex-direction:column; align-items:flex-start; gap:10px }
  .nav-inner .brand{ font-size:18px }
  .nav-links{ width:100%; display:flex; flex-wrap:wrap; gap:8px }
  .nav-links .btn{ margin-left:0 }
}
</style>
