import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './App'
import { LikesProvider } from './context/LikesContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <LikesProvider>
        <App />
      </LikesProvider>
    </BrowserRouter>
  </React.StrictMode>
)