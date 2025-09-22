import React from 'react'
import './HomeScreen.css'

function HomeScreen() {
  return (
    <div className="Homescreen">
      <div className="home__top">
        <img className="home__banner" 
        src="/images/exedra-banner.webp"
        fetchPriority='high'
        alt="Homescreen Banner">
        </img>
        <div className="home__message">
            <h1>Welcome to <span className="app__pink">exedra.app </span></h1>

            <h4>All about the game Madoka Magica Magia Exedra.
            <br></br>
            Find character info, meta tier-list, and game news here!
            </h4>
        </div>
      </div>
      <div className="home__content">
        <iframe className="home__video"
        src="https://www.youtube.com/embed/L8WHpJEQ6Ls?si=aTcKQABYdR4E9NxA&autoplay=1&mute=1" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen>

        </iframe>
      </div>
    </div>
  )
}

export default HomeScreen