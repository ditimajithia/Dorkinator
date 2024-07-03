import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.tsx'
import './index.css'
import History from './routes/History.tsx';
import Login from './routes/Login.tsx';
import Signup from './routes/Signup.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className='relative'>
      <App />
      </div>
    ),
  },
  {
    path: "history",
    element: <History />,
  },
  {
    path:"login",
    element:<Login />
  },
  {path:"signup",
    element:<Signup />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <div className='bg-black text-white'>
    <RouterProvider router={router} />,
  </div>
)
