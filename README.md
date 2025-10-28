# TicketApp — Vue Implementation

This is the Vue 3 + Vite implementation of the TicketApp requested for the Frontend Stage 2 task.

## Features
- Landing page with wavy SVG hero and decorative circle
- Simulated authentication (signup/login) using localStorage
- Protected Dashboard and Tickets routes (session key: `ticketapp_session`)
- Full ticket CRUD (create, read, update, delete) using localStorage
- Real-time validation with inline errors and toast notifications
- Responsive layout (max-width: 1440px centered)

## Frameworks / Libraries
- Vue 3
- Vue Router
- Vite (dev server + build)

## Setup (Windows - cmd.exe)
1. Install dependencies:

```cmd
cd c:\Users\Emmanuel\hngtasktwovue
npm install
```

2. Run dev server:

```cmd
npm run dev
```

3. Open the local URL printed by Vite (usually http://localhost:5173).

## Usage
- Landing: `/` — hero, CTA buttons
- Login: `/auth/login` — sign in with existing account
- Signup: `/auth/signup` — create an account (creates a local user and signs in)
- Dashboard: `/dashboard` — statistics (protected)
- Tickets: `/tickets` — manage tickets (protected)

Session token is stored in `localStorage` with key `ticketapp_session`.

## Test Credentials
- You can create any account via the Signup page. Example test user:
  - Email: `tester@example.com`
  - Password: `password123`

## Notes on UI & State
- State is stored in localStorage (users: `ticketapp_users`, tickets: `ticketapp_tickets`).
- Components:
  - `NavBar` — top navigation and logout behavior
  - `Toast` — global toast via `window.__toast(msg,type)` used across services
  - `TicketForm` — create/edit form with inline validation
  - `TicketCard` — ticket summary card with status color rules

## Accessibility
- Semantic HTML elements used for forms and navigation
- Visible focusable controls and color contrasts considered for status badges

## Known issues / Next steps
- No persistence beyond browser localStorage (intended for this task)
- Improve unit tests and add form ARIA attributes

