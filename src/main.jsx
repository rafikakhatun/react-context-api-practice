
import '@fortawesome/fontawesome-free/css/all.min.css';

import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/layout.jsx'
import About from './pages/About.jsx'
import Home from './pages/home.jsx'
import Contact from './pages/Contact.jsx'
import Drashboard from './pages/Drashboard.jsx'
import AuthProvider from './provider/AuthProvider.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import TermsConditions from './pages/TermsCondtions.jsx';
import PrivateRoute from './route/PrivateRoute.jsx';


const router = createBrowserRouter([

  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/home",
        element: <Home></Home>

      },


      {
        path: "/about",
        element: <About></About>
      },

      {
        path: "/contact",
        element: <Contact></Contact>
      },

      {
        path: "/drashboard",
        element:<PrivateRoute> <Drashboard></Drashboard></PrivateRoute>
      },

      {
        path: "/register",
        element:<Register></Register>
      },

      {
        path:"/login",
        element:<Login></Login>
      },

      

      {
        path:"/termsCondition",
        element:<TermsConditions></TermsConditions>


      }
    ]

  }












]);











createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>

  </StrictMode>,
)
