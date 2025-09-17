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
import { Routes, Route, Navigate } from 'react-router-dom';




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
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/new-horizons" element={<NewHorizons />} />

      </Routes>
      <Footer />
    </div>

  )
}

export default App
