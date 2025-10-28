<template>
  <div>
    <NavBar />
    <main class="auth container">
      <div class="auth-card">
        <h2>Login</h2>
        <form @submit.prevent="onSubmit">
          <label>Email
            <input v-model="form.email" type="email" required />
          </label>
          <div v-if="errors.email" class="error">{{ errors.email }}</div>

          <label>Password
            <input v-model="form.password" type="password" required />
          </label>
          <div v-if="errors.password" class="error">{{ errors.password }}</div>

          <button class="btn primary" :disabled="loading">Login</button>
        </form>
        <p class="muted">No account? <a @click.prevent="$router.push('/auth/signup')">Sign up</a></p>
      </div>
    </main>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import { login } from '../services/auth'
export default {
  components:{ NavBar },
  data(){ return { form:{ email:'', password:'' }, errors:{}, loading:false } },
  methods:{
    onSubmit(){
      this.errors = {}
      if(!this.form.email) this.errors.email = 'Email is required'
      if(!this.form.password) this.errors.password = 'Password is required'
      if(Object.keys(this.errors).length) return
      this.loading = true
      login(this.form).then(()=>{
        window.__toast && window.__toast('Welcome back!', 'success')
        this.$router.push('/dashboard')
      }).catch(err=>{
        window.__toast && window.__toast(err.message || 'Login failed','error')
      }).finally(()=> this.loading = false)
    }
  }
}
</script>

<style scoped>
.container{ max-width:1440px; margin:0 auto; padding:0 16px }
.auth{ display:flex; justify-content:center; padding:40px 0 }
.auth-card{ width:100%; max-width:420px; background:white; padding:24px; border-radius:12px; box-shadow:0 8px 24px rgba(0,0,0,0.06) }
label{ display:block; margin-top:12px }
input{ width:100%; padding:10px; margin-top:6px; border-radius:8px; border:1px solid #e5e7eb }
.error{ color:#ef4444; font-size:13px; margin-top:6px }
.muted{ color:#6b7280; margin-top:12px }
</style>
