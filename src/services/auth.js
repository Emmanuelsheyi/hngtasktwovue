const USERS_KEY = 'ticketapp_users'
const SESSION_KEY = 'ticketapp_session'

function _getUsers(){
  const raw = localStorage.getItem(USERS_KEY)
  return raw ? JSON.parse(raw) : []
}

function _saveUsers(users){
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

export function signup({name, email, password}){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = _getUsers()
      if (users.find(u => u.email === email)) {
        reject(new Error('Email already registered'))
        return
      }
      const user = { id: Date.now(), name, email, password }
      users.push(user)
      _saveUsers(users)
      const token = btoa(`${user.id}:${user.email}`)
      localStorage.setItem(SESSION_KEY, token)
      resolve({ token, user: { id: user.id, name: user.name, email: user.email }})
    }, 500)
  })
}

export function login({email, password}){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = _getUsers()
      const user = users.find(u => u.email === email && u.password === password)
      if (!user) {
        reject(new Error('Invalid credentials'))
        return
      }
      const token = btoa(`${user.id}:${user.email}`)
      localStorage.setItem(SESSION_KEY, token)
      resolve({ token, user: { id: user.id, name: user.name, email: user.email }})
    }, 400)
  })
}

export function logout(){
  localStorage.removeItem(SESSION_KEY)
}

export function getSession(){
  return localStorage.getItem(SESSION_KEY)
}

export function getCurrentUser(){
  const token = getSession()
  if (!token) return null
  try{
    const decoded = atob(token)
    const parts = decoded.split(':')
    const id = Number(parts[0])
    const users = _getUsers()
    const user = users.find(u => u.id === id)
    if (!user) return null
    return { id: user.id, name: user.name, email: user.email }
  }catch(e){ return null }
}
