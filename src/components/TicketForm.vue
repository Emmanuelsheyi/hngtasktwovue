<template>
  <form @submit.prevent="onSubmit" class="ticket-form">
    <label>Title
      <input v-model="data.title" type="text" />
    </label>
    <div v-if="errors.title" class="error">{{ errors.title }}</div>

    <label>Description
      <textarea v-model="data.description" rows="3"></textarea>
    </label>

    <label>Status
      <select v-model="data.status">
        <option value="open">open</option>
        <option value="in_progress">in_progress</option>
        <option value="closed">closed</option>
      </select>
    </label>
    <div v-if="errors.status" class="error">{{ errors.status }}</div>

    <label>Priority
      <select v-model="data.priority">
        <option value="low">low</option>
        <option value="normal">normal</option>
        <option value="high">high</option>
      </select>
    </label>

    <div style="margin-top:12px">
      <button class="btn primary" type="submit">{{ isEdit ? 'Update' : 'Create' }}</button>
      <button class="btn ghost" type="button" @click="$emit('cancel')">Cancel</button>
    </div>
  </form>
</template>

<script>
export default {
  name:'TicketForm',
  props:{ model:{ type:Object, default:()=>({ title:'', description:'', status:'open', priority:'normal' }) } },
  data(){ return { data: { ...this.model }, errors:{} } },
  computed:{ isEdit(){ return !!this.model && !!this.model.id } },
  methods:{
    validate(){
      this.errors = {}
      if(!this.data.title) this.errors.title = 'Title is required'
      const allowed = ['open','in_progress','closed']
      if(!allowed.includes(this.data.status)) this.errors.status = 'Status must be open|in_progress|closed'
      return Object.keys(this.errors).length === 0
    },
    onSubmit(){
      if(!this.validate()) return
      this.$emit('save', { ...this.data })
    }
  }
}
</script>

<style scoped>
.ticket-form label{ display:block; margin-top:8px }
.ticket-form input, .ticket-form textarea, .ticket-form select{ width:100%; padding:8px; border-radius:8px; border:1px solid #e5e7eb }
.error{ color:#ef4444; font-size:13px; margin-top:6px }
</style>