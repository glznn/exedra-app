import React from 'react'
import './HomeScreen.css'

function HomeScreen() {
  return (
    <div className="homescreen">
        <img className="home__banner" src="https://madoka-exedra.com/assets_teaser2/img/teaser/ver_black/kv_black_pc.jpg" alt="Homescreen Banner">
        </img>
        <div className="home__message">

            <h1>Welcome to <span className="home__gg">exedra.gg</span></h1>

            <h4>All about the game Madoka Magica Magia Exedra.
            <br></br>
            Find character info, meta tier-list, and game news here!
            </h4>

        </div>
        <div className="home__content">
          <iframe className="home__video"
          src="https://www.youtube.com/embed/L8WHpJEQ6Ls?si=aTcKQABYdR4E9NxA" 
          title="YouTube video player" 
          frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="home__twitter">
        <a class="twitter-timeline"  
          data-chrome="noscrollbar" data-width="300" data-height="900" data-theme="dark" 
          href="https://twitter.com/madoka_exedraEN?ref_src=twsrc%5Etfw"
          aria-label="Follow Madoka Exedra on Twitter"
          ></a> 
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
    </div>
  )
}

export default HomeScreen