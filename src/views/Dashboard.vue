<template>
  <div>
    <NavBar />
    <main class="container" style="padding:24px 16px">
      <h2>Dashboard</h2>
      <div class="stats-grid" style="margin-top:16px">
        <div class="stat card"> <div class="stat-title">Total tickets</div> <div class="stat-value">{{ total }}</div> </div>
        <div class="stat card"> <div class="stat-title">Open</div> <div class="stat-value">{{ open }}</div> </div>
        <div class="stat card"> <div class="stat-title">Resolved</div> <div class="stat-value">{{ closed }}</div> </div>
      </div>
      <div style="margin-top:20px">
        <button class="btn primary" @click="$router.push('/tickets')">Manage Tickets</button>
      </div>
    </main>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import { fetchTickets } from '../services/tickets'
export default {
  components:{ NavBar },
  data(){ return { tickets: [] } },
  computed:{
    total(){ return this.tickets.length },
    open(){ return this.tickets.filter(t=>t.status==='open').length },
    closed(){ return this.tickets.filter(t=>t.status==='closed').length }
  },
  mounted(){ this.load() },
  methods:{
    load(){ fetchTickets().then(r=> this.tickets = r).catch(()=> window.__toast && window.__toast('Failed to load tickets. Please retry.','error')) }
  }
}
</script>

<style scoped>
.card{ background:white; padding:18px; border-radius:12px; box-shadow:0 6px 18px rgba(0,0,0,0.06) }
.stats-grid{ display:grid; grid-template-columns:repeat(3,1fr); gap:12px }
.stat-title{ color:#6b7280 }
.stat-value{ font-size:24px; font-weight:700 }
@media(max-width:800px){ .stats-grid{ grid-template-columns:1fr } }
</style>
