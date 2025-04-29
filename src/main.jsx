import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './layouts/Root.jsx';
import Home from './components/Home/Home.jsx';
import Register from './components/Register/Register.jsx';
import Login from './components/Login/Login.jsx';
import AuthProvider from './contexts/AuthProvider.jsx';
import Orders from './components/Orders/Orders.jsx';
import Profile from './components/Profile/Profile.jsx';
import PrivateRoutes from './Routes/PrivateRoutes.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {index: true, Component: Home},
      {path: 'login', Component: Login},
      {path: 'register', Component: Register},
      {
        path: 'orders', 
        // Component: Orders
        element:<PrivateRoutes><Orders></Orders></PrivateRoutes>
      },
      {path: 'profile', Component: Profile},
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
         <RouterProvider router={router} />
     </AuthProvider>
  </StrictMode>,
)
