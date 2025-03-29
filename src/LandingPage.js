import React from 'react'
import Nav from './Nav'
import './LandingPage.css'
import Sidebar from './Sidebar'
import HomeScreen from './HomeScreen'
import CharacterScreen from './CharacterScreen'
import TierListScreen from './TierListScreen'
import { BrowserRouter as Router, Route, Routes, Link, useNavigate} from 'react-router-dom';


function LandingPage() {
  return (
    <div className='landingpage'> 
        <Nav />
        <Sidebar />
        <Router>
          <Routes>
            <Route path="/" element={<HomeScreen/>}/>
            <Route path="/characters" element={<CharacterScreen />} />
            <Route path="/tierlist" element={<TierListScreen />} />
          </Routes>
      </Router>
    </div>
  )
}

export default LandingPage