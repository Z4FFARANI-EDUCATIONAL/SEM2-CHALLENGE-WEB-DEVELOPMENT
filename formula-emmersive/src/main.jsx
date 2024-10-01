import React from 'react'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import Welcome from './pages/Welcome.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import F1 from './components/F1/F1.jsx'
import FE from './components/FE/FE.jsx'
import Live from './pages/Live.jsx'

const router = createBrowserRouter([
  { index: true, element: <Welcome />, },
  { path: "register", element: <Register /> },
  { path: "login", element: <Login /> },
  
  {
    path: "/", element: <App />,
    children: [
      { path: "home", element: <Home />},
      { path: "f1", element: <F1 /> },  
      { path: "fe", element: <FE /> },  
      { path: "live", element: <Live /> }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>  
    <RouterProvider router={ router } />
  </StrictMode>
)