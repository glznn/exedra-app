import React from 'react';

// Import your character data
import { CharacterData_five } from './backend/CharacterData_five'; // Assuming your data is in a file named CharacterData.js
import "./TierListScreen.css"

const CharacterList = () => {
  return (
    <div className="character-list">
      {CharacterData_five.map((character, index) => (
        <div className="character-card" key={index}>
          <h2>{character.name}</h2>
          <img src={character.image} alt={character.name} className="character-image" />
          <p><strong>Type:</strong> {character.type}</p>
          <p><strong>Role:</strong> {character.role}</p>
          <p><strong>HP:</strong> {character.stats.hp}</p>
          <p><strong>ATK:</strong> {character.stats.atk}</p>
          <p><strong>DEF:</strong> {character.stats.def}</p>
          <p><strong>SPD:</strong> {character.stats.spd}</p>

          {/* Special Attack Section */}
          <div>
            <h3>Special Attack:</h3>
            <p><strong>Name:</strong> {character.spatk.name}</p>
            <p><strong>Description:</strong> {character.spatk.desc}</p>
          </div>

          {/* Basic Attack Section */}
          <div>
            <h3>Basic Attack:</h3>
            <p>{character.basicatk}</p>
          </div>

          {/* Skill Section */}
          <div>
            <h3>Skill:</h3>
            <p><strong>Name:</strong> {character.skill.name}</p>
            <p><strong>Description:</strong> {character.skill.desc}</p>
          </div>

          {/* Ability Section */}
          <div>
            <h3>Ability:</h3>
            <p><strong>Name:</strong> {character.ability.name}</p>
            <p><strong>Description:</strong> {character.ability.desc}</p>
          </div>

          {/* Suppability Section */}
          <div>
            <h3>Suppability:</h3>
            <p><strong>Name:</strong> {character.suppability.name}</p>
            <p><strong>Description:</strong> {character.suppability.desc}</p>
          </div>

          {/* Ascension Section */}
          <div>
            <h3>Ascension (Level 1 - 5):</h3>
            {Object.keys(character.asc).map((level, idx) => (
              <div key={idx}>
                <h4>Level {level}:</h4>
                <p>{character.asc[level]}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CharacterList;
