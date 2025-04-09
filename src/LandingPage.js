import React from 'react'
import Nav from './Nav'
import Sidebar from './Sidebar'
import HomeScreen from './HomeScreen'
import CharacterScreen from './CharacterScreen'
import TierListScreen from './TierListScreen'
import SimulatorScreen from './SimulatorScreen'
import KiokuScreen from './KiokuScreen'
import ContactScreen from './ContactScreen'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PrivacyPolicyScreen from './PrivacyPolicyScreen'

import './LandingPage.css'



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
            <Route path="/simulator" element={<SimulatorScreen />} />
            <Route path="/characters/:path" element={<KiokuScreen />} />
            <Route path="/privacypolicy" element={<PrivacyPolicyScreen />}/>
            <Route path="/contactus" element={<ContactScreen />}/>
          </Routes>
        </Router>
    </div>
  )
}

export default LandingPage