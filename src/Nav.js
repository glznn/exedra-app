import React, { useState, useEffect } from 'react';
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true); 
        } else {
            handleShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
        <div className="nav__contents"
        onClick={()=> {
            window.location.pathname = "/"
            }}>
            <img
            className='nav__logo' 
            src="https://i.redd.it/more-official-images-magica-exedra-and-logo-v0-eftr2o9rmxvc1.png?width=1337&format=png&auto=webp&s=44891311b5dead651226d9ad1f8ad7d2c3e5b5f3">        
            </img>
        </div>
    </div>
  )
}

export default Nav