import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './AppAgenda.jsx'

const Personas = [
  { name: 'Arto Hellas', number: '040-123456' },
  { name: 'Ada Lovelace', number: '39-44-5323523' },
]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App Personas={Personas} />
  </StrictMode>,
)
