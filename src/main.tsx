import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './App'
import { LikesProvider } from './context/LikesContext'
import './styles/tokens.css'
import './index.css'
import './styles/ui.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <LikesProvider>
        <App />
      </LikesProvider>
    </BrowserRouter>
  </React.StrictMode>
)