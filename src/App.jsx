import { useState } from 'react'
import './App.scss'
import './index.scss'
import './styles/main.scss';
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import Contactus from './pages/Contactus';
import Mission from './pages/Mission';
import NewHorizons from './pages/NewHorizons';
import GovernmentSite from './regions/GovernmentSite';
import Logoheader from './regions/Logoheader';
import Menuheader from './regions/Menuheader';
import Footer from './regions/Footer';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { Outlet } from 'react-router-dom';




function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="Menuheader">
      <GovernmentSite />
      <Logoheader />
      <Menuheader />

      {/* This is where the child route content renders from main.jsx */}
      <Outlet />

      <Footer />
    </div>

  )
}

export default App
