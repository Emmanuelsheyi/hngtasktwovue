<template>
  <div class="toast-wrap" v-if="visible">
    <div class="toast" :class="type">{{ message }}</div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'Toast',
  setup(){
    const visible = ref(false)
    const message = ref('')
    const type = ref('')

    function show(msg, t='info', ms=3000){
      message.value = msg
      type.value = t
      visible.value = true
      setTimeout(()=> visible.value = false, ms)
    }

    window.__toast = show

    return { visible, message, type }
  }
}
</script>

<style scoped>
.toast-wrap{ position:fixed; right:16px; bottom:16px; z-index:9999 }
.toast{ background:#111; color:white; padding:10px 14px; border-radius:8px; box-shadow:0 6px 18px rgba(0,0,0,0.15) }
.toast.info{ background:#2b6cb0 }
.toast.success{ background:#2f855a }
.toast.error{ background:#c53030 }
</style>
