<template>
  <div>
    <NavBar />
    <main class="container" style="padding:24px 16px">
      <h2>Tickets</h2>
      <div style="margin-top:12px; display:flex; gap:12px; align-items:center">
        <button class="btn primary" @click="openCreate">New Ticket</button>
        <div class="muted">Showing {{ tickets.length }} tickets</div>
      </div>

      <div v-if="showForm" style="margin-top:12px; max-width:720px"><TicketForm :model="editing" @save="saveTicket" @cancel="closeForm" /></div>

      <div style="margin-top:16px; display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:12px">
        <TicketCard v-for="t in tickets" :key="t.id" :ticket="t" @edit="onEdit" @delete="onDelete" />
      </div>
    </main>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import TicketCard from '../components/TicketCard.vue'
import TicketForm from '../components/TicketForm.vue'
import { fetchTickets, createTicket, updateTicket, deleteTicket } from '../services/tickets'
export default {
  components:{ NavBar, TicketCard, TicketForm },
  data(){ return { tickets:[], showForm:false, editing:null } },
  mounted(){ this.load() },
  methods:{
    load(){ fetchTickets().then(r=> this.tickets = r).catch(()=> window.__toast && window.__toast('Failed to load tickets. Please retry.','error')) },
    openCreate(){ this.editing = { title:'', description:'', status:'open', priority:'normal' }; this.showForm = true },
    closeForm(){ this.showForm = false; this.editing = null },
    saveTicket(payload){
      if(payload.id){
        updateTicket(payload.id, payload).then(()=>{ window.__toast && window.__toast('Ticket updated','success'); this.load(); this.closeForm() }).catch(e=> window.__toast && window.__toast(e.message,'error'))
      } else {
        createTicket(payload).then(()=>{ window.__toast && window.__toast('Ticket created','success'); this.load(); this.closeForm() }).catch(e=> window.__toast && window.__toast(e.message,'error'))
      }
    },
    onEdit(t){ this.editing = { ...t }; this.showForm = true },
    onDelete(t){ if(!confirm('Delete this ticket?')) return; deleteTicket(t.id).then(()=>{ window.__toast && window.__toast('Ticket deleted','info'); this.load() }).catch(e=> window.__toast && window.__toast(e.message,'error')) }
  }
}
</script>

<style scoped>
@media(max-width:800px){ main{ padding:12px } }
</style>