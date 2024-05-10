import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthProvider from './componnents/contexts/AuthProvider.jsx'
import router from './componnents/Router/Router.jsx'
// import { Toaster } from 'react-hot-toast'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    
    <AuthProvider   >

    <RouterProvider  router={ router}></RouterProvider>
    {/* <Toaster></Toaster> */}
    </AuthProvider>
  </React.StrictMode>,
)
