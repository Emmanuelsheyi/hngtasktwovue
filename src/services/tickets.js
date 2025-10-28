const TICKETS_KEY = 'ticketapp_tickets'

function _getTickets(){
  const raw = localStorage.getItem(TICKETS_KEY)
  return raw ? JSON.parse(raw) : []
}

function _saveTickets(tickets){
  localStorage.setItem(TICKETS_KEY, JSON.stringify(tickets))
}

export function fetchTickets(){
  return new Promise((resolve) => {
    setTimeout(() => resolve(_getTickets()), 300)
  })
}

export function createTicket(data){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(!data.title || !data.status) return reject(new Error('Title and status are required'))
      const allowed = ['open','in_progress','closed']
      if(!allowed.includes(data.status)) return reject(new Error('Invalid status'))
      const tickets = _getTickets()
      const t = { id: Date.now(), title: data.title, description: data.description || '', status: data.status, priority: data.priority || 'normal', createdAt: new Date().toISOString() }
      tickets.unshift(t)
      _saveTickets(tickets)
      resolve(t)
    }, 300)
  })
}

export function updateTicket(id, data){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const tickets = _getTickets()
      const idx = tickets.findIndex(t => t.id === id)
      if(idx === -1) return reject(new Error('Ticket not found'))
      if(!data.title || !data.status) return reject(new Error('Title and status are required'))
      const allowed = ['open','in_progress','closed']
      if(!allowed.includes(data.status)) return reject(new Error('Invalid status'))
      tickets[idx] = { ...tickets[idx], ...data, updatedAt: new Date().toISOString() }
      _saveTickets(tickets)
      resolve(tickets[idx])
    }, 300)
  })
}

export function deleteTicket(id){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let tickets = _getTickets()
      const idx = tickets.findIndex(t => t.id === id)
      if(idx === -1) return reject(new Error('Ticket not found'))
      const removed = tickets.splice(idx,1)[0]
      _saveTickets(tickets)
      resolve(removed)
    }, 200)
  })
}
