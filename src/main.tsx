import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ClientProvider from './providers/clients/clientContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ClientProvider>
        <App/>
      </ClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
