import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './CharacterScreen.css'

function CharacterScreen() {
  const[character, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/results')
    .then(response => {
      setCharacters(response.data.characters);
    })
    .catch(error => {
      console.error('Error fetching scraped data:', error);
    })
  }, [])

  return (
    <div className="CharacterScreen">
        <h1>Characters</h1>
        <div className="screen___list">
          <ul className="char__list">
            {character.map((characterI, index) => (
              <li className="char__elements" key={index}>
              <h3 className="char__text">{characterI.name}</h3>
              <div className="charimg__container">
                <img className="char__img" src={characterI.image}/>
              </div>
              </li>
            ))}
          </ul>
        </div>
        <h1> THIS IS THE CHARACTER PAGE </h1>
        <h1> THIS IS THE CHARACTER PAGE </h1>
    </div>
  )
}

export default CharacterScreen