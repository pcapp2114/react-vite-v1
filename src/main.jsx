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
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import App from './App.jsx'
import SearchResults from './SearchResults.jsx';


const router = createBrowserRouter([
  {
   path: '/',
    element: <App />,
    children: [
        // 👇 default redirect when hitting "/"
        {
          index: true,
          element: <Navigate to="/home" replace />,
        },
        {
          path: 'home',
          element: <Home />,
        },
        { path: 'aboutus', element: <Aboutus /> },
        { path: 'contactus', element: <Contactus /> },
        { path: 'new-horizons', element: <NewHorizons /> },
        { path: 'mission', element: <Mission /> },
        { path: 'search', element: <SearchResults /> }, // ✅ add search route
      ],
  },
], {
  basename: '/assets/react-sites/react-doe-v1', // no trailing slash Example: '/my-app/' or '/admin/'
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
