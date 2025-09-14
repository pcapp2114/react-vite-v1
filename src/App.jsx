import { useState } from 'react'
import './App.scss'
import './index.scss'
import './styles/main.scss';
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import Contactus from './pages/Contactus';
import GovernmentSite from './regions/GovernmentSite';
import Logoheader from './regions/Logoheader';
import Menuheader from './regions/Menuheader';
import Footer from './regions/Footer';
import { Routes, Route, Navigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="Menuheader">
      <GovernmentSite />
      <Logoheader />
      <Menuheader />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/aboutus" element={<Aboutus />} />

      </Routes>
      <Footer />
    </div>

  )
}

export default App
