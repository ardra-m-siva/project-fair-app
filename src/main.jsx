import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './bootstrap.min.css'
import ContextApi from './context/ContextApi.jsx'
import AuthContextApi from './context/AuthContextApi.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthContextApi>
     <ContextApi>
       <BrowserRouter>
        <App />
        </BrowserRouter>
     </ContextApi>
   </AuthContextApi>
  </StrictMode>,
)
