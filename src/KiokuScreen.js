import React from 'react'

import { useParams } from 'react-router-dom'
import { CharacterData_five } from './backend/CharacterData_five.js'
import { CharacterData_four } from './backend/CharacterData_four.js'
import { CharacterData_three } from './backend/CharacterData_three.js'

import './KiokuScreen.css'
import ColorText from './ColorText'

const allCharacterData = [
    ...CharacterData_five,
    ...CharacterData_four,
    ...CharacterData_three
]

function KiokuScreen() {

    window.scrollTo(0,0);

    const { path } = useParams();
    var charIndex = 0;
    
    // Find appropriate character based on the path

    for (var i = 0; i < allCharacterData.length; i++) {
        if (allCharacterData[i].spatk.name === path)
        {
            charIndex = i;
        }
    }
  return (
    <div className="KiokuScreen">
        <div className="kioku__banner">
        <img className="kioku__banner image" src={allCharacterData[charIndex].image}></img>
        </div>
        <div className="kioku__header">
        <h1 id="txt">{allCharacterData[charIndex].name}</h1>
            <div className="kioku__elem">
                <img id="png" src={`/exedra-icons/elements/${allCharacterData[charIndex].type}-elem.png`}></img>
            </div>
            <div className="kioku__role">
                <img id="png" src={`/exedra-icons/role/${allCharacterData[charIndex].role}.png`}></img>
            </div>
        </div>
        <div className="kioku__image">
        <img className="kioku__png" src={allCharacterData[charIndex].image}></img>
        </div>
        <div className={`kioku__${allCharacterData[charIndex].rarity}stars`}>
            <img className="kioku__star" src={`/exedra-icons/rarity/${allCharacterData[charIndex].rarity}star.png`}></img>
        </div>

        <ul className="kioku__stats">
            <li className="kioku__hp"> <h1> HP {allCharacterData[charIndex].stats.hp} </h1></li>
            <li className="kioku__atk"> <h1> ATK {allCharacterData[charIndex].stats.atk} </h1> </li>
            <li className="kioku__def"> <h1> DEF {allCharacterData[charIndex].stats.def} </h1> </li>
            <li className="kioku__spd"> <h1> SPD <br></br>{allCharacterData[charIndex].stats.spd} </h1></li>
        </ul>

        <p className="kioku__kit">
            <h2 className="kioku__kitTitle">Special Attack:</h2>
            <span id={`highlight${allCharacterData[charIndex].type}`}>{allCharacterData[charIndex].spatk.name}</span><br></br>
            <ColorText text={allCharacterData[charIndex].spatk.desc} />
        </p>
        <p className="kioku__kit">
            <h2 className="kioku__kitTitle">Basic Attack:</h2>
            <ColorText text={allCharacterData[charIndex].basicatk} />
        </p>
        <p className="kioku__kit">
            <h2 className="kioku__kitTitle">Battle Skill:</h2>
            <span id={`highlight${allCharacterData[charIndex].type}`}>{allCharacterData[charIndex].skill.name}</span><br></br>
            <ColorText text={allCharacterData[charIndex].skill.desc}/>
        </p>
        <p className="kioku__kit">
            <h2 className="kioku__kitTitle">Ability:</h2>
        <span id={`highlight${allCharacterData[charIndex].type}`}>{allCharacterData[charIndex].ability.name}</span><br></br>
                <ColorText text={allCharacterData[charIndex].ability.desc}/>
        </p>
        <p className="kioku__kit">
            <h2 className="kioku__kitTitle">Support Ability:</h2>
            <span id={`highlight${allCharacterData[charIndex].type}`}>{allCharacterData[charIndex].suppability.name}</span><br></br>
            <ColorText text={allCharacterData[charIndex].suppability.desc} />
        </p>
        <p className="kioku__kit">
            <h2 className="kioku__kitTitle">Ascension:</h2>
        Lvl 1: <ColorText text={allCharacterData[charIndex].asc[1]}/><br></br><br></br>
        Lvl 2: <ColorText text={allCharacterData[charIndex].asc[2]}/><br></br><br></br>
        Lvl 3: <ColorText text={allCharacterData[charIndex].asc[3]}/><br></br><br></br>
        Lvl 4: <ColorText text={allCharacterData[charIndex].asc[4]}/><br></br><br></br>
        Lvl 5: <ColorText text={allCharacterData[charIndex].asc[5]}/><br></br>
        </p>
    </div>
  )
}

export default KiokuScreen