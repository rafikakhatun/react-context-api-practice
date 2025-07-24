import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/layout.jsx'
import About from './pages/About.jsx'
import Home from './pages/home.jsx'


const router = createBrowserRouter([

  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path : "/home",
        element : <Home></Home>

      },


      {
        path: "/about",
        element: <About></About>
      }
    ]

  }












]);











createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
