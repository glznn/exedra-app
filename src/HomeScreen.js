import React from 'react'
import Nav from './Nav'
import './HomeScreen.css'
import Sidebar from './Sidebar'
import CharacterScreen from './CharacterScreen'
import TierListScreen from './TierListScreen'
import { BrowserRouter as Router, Route, Routes, Link, useNavigate} from 'react-router-dom';


function HomeScreen() {
  return (
    <div className='homescreen'> 
        <Nav />
        <Sidebar />
        <h1>THIS IS THE HOMEPAGE</h1>
        <h1>THIS IS THE HOMEPAGE</h1>
        <h1>THIS IS THE HOMEPAGE</h1>
        <h1>THIS IS THE HOMEPAGE</h1>
        <h1>THIS IS THE HOMEPAGE</h1>

        <Router>
          <Routes>
            <Route path="/characters" element={<CharacterScreen />} />
            <Route path="/tierlist" element={<TierListScreen />} />
          </Routes>
      </Router>
    </div>
  )
}

export default HomeScreen