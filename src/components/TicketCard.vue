<template>
  <div class="ticket-card card">
    <div class="ticket-header">
      <h3>{{ ticket.title }}</h3>
      <div class="actions">
        <button class="btn ghost" @click="$emit('edit', ticket)">Edit</button>
        <button class="btn danger" @click="$emit('delete', ticket)">Delete</button>
      </div>
    </div>
    <p class="muted">{{ ticket.description }}</p>
    <div class="ticket-meta">
      <span :class="['status', statusClass]">{{ ticket.status }}</span>
      <small class="muted">{{ ticket.priority }} • {{ formatDate(ticket.createdAt) }}</small>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TicketCard',
  props:{ ticket:{ type:Object, required:true } },
  computed:{
    statusClass(){ return `status-${this.ticket.status}` }
  },
  methods:{ formatDate(d){ return d ? new Date(d).toLocaleString() : '' } }
}
</script>

<style scoped>
.ticket-card{ padding:14px }
.ticket-header{ display:flex; justify-content:space-between; align-items:center }
.actions .btn{ margin-left:8px }
.status{ padding:6px 8px; border-radius:10px; font-weight:600; text-transform:capitalize }
.status-open{ background:#dcfce7; color:#166534 }
.status-in_progress{ background:#fff7ed; color:#92400e }
.status-closed{ background:#f3f4f6; color:#374151 }
.ticket-meta{ display:flex; gap:12px; justify-content:space-between; align-items:center; margin-top:10px }

/* Stack ticket header actions on small screens */
@media (max-width: 600px) {
  .ticket-header{ flex-direction:column; align-items:flex-start; gap:8px }
  .actions{ display:flex; gap:8px }
  .actions .btn{ margin-left:0 }
  .ticket-meta{ flex-direction:column; align-items:flex-start; gap:6px }
}
</style>
