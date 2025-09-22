import React from 'react'

import "./TierListScreen.css"

function TierListScreen() {
  return (
    <div className="TierListScreen"> 
        <div className="tierlist__banner">
            <img id="img" 
            src="/images/kyubey-background.webp"
            fetchPriority='high'
            alt="Kyubey Placeholder"
            ></img>
        </div>
        <div className="tierlist__message"> 
        <h1> 
          <span className="app__pink">Tier List</span> 
          <br></br>
          coming soon! </h1>
        </div>
    </div>
  )
}

export default TierListScreen