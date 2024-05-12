import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthProvider from './componnents/contexts/AuthProvider.jsx'
import router from './componnents/Router/Router.jsx'
// import { Toaster } from 'react-hot-toast'
import { RouterProvider } from 'react-router-dom'

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'

// Create a client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    
    <AuthProvider   >
    <QueryClientProvider client={queryClient}>

    <RouterProvider  router={ router}></RouterProvider>
    </QueryClientProvider>
    <Toaster></Toaster>
    </AuthProvider>
  </React.StrictMode>,
)
