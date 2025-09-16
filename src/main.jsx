import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import Contactus from './pages/Contactus';
import Mission from './pages/Mission';
import NewHorizons from './pages/NewHorizons';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'


const router = createBrowserRouter([
  {
   path: '/',
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: 'aboutus',
        element: <Aboutus />,
      },
      {
        path: 'contactus',
        element: <Contactus />,
      },
      {
        path: 'new-horizons',
        element: <NewHorizons />,
      },
      {
        path: 'mission',
        element: <Mission />,
      },
    ],
  },
], {
  basename: '/assets/react-sites/react-doe-v1/', // Example: '/my-app/' or '/admin/'
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
