import React from 'react'
import {CharacterData_five} from"./CharacterData_five"
import {CharacterData_four} from "./CharacterData_four"
import {CharacterData_three} from "./CharacterData_three"
import "./TierListScreen.css"


function TierListScreen() {
  return (
    <div className="TierListScreen">
        <div>
            <h1>Character Data</h1>
            {CharacterData_five.map((character, index) => (
                <div key={index}>
                    <h2>{character.name}</h2>
                    <img src={character.image} alt={character.name} />
                    <p>Type: {character.type}</p>
                    <p>Role: {character.role}</p>
                    <p>HP: {character.stats.hp}</p>
                    {/* You can render more information as needed */}
                </div>
            ))}
        </div>
    </div>
  )
}

export default TierListScreen