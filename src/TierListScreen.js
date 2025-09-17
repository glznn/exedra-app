import React from 'react'

import "./TierListScreen.css"

function TierListScreen() {
  return (
    <div className="TierListScreen"> 
        <div className="tierlist__banner">
            <img id="img" 
            src="https://i.redd.it/more-official-images-magica-exedra-and-logo-v0-efjytt0qmxvc1.jpg?width=2800&format=pjpg&auto=webp&s=cafb5ea94241eb5938e3ab11662280fd9611fe10"
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