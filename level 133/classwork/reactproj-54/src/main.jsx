import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { tot } from './context/CountContext.jsx'

createRoot(document.getElementById('root')).render(
  <tot>
    <App />
  </tot>
)
