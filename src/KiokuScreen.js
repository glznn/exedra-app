import React from 'react'

import { useParams } from 'react-router-dom'
import { CharacterData_five } from './backend/CharacterData_five.js'
import { CharacterData_four } from './backend/CharacterData_four.js'
import { CharacterData_three } from './backend/CharacterData_three.js'

import { IoHeart } from "react-icons/io5";
import { PiSwordDuotone } from "react-icons/pi";
import { MdShield } from "react-icons/md";
import { GiWalkingBoot } from "react-icons/gi";


import './KiokuScreen.css'

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
        <h1>{allCharacterData[charIndex].name}</h1>
            <div className="kioku__elem">
                <img src={`/exedra-icons/elements/${allCharacterData[charIndex].type}-elem.png`}></img>
            </div>
            <div className="kioku__role">
                <img src={`/exedra-icons/role/${allCharacterData[charIndex].role}.png`}></img>
            </div>
        </div>
        <div className="kioku__image">
        <img className="kioku__png" src={allCharacterData[charIndex].image}></img>
        </div>
        <div className={`kioku__${allCharacterData[charIndex].rarity}stars`}>
            <img className="kioku__star" src={`/exedra-icons/rarity/${allCharacterData[charIndex].rarity}star.png`}></img>
        </div>
        <ul className="kioku__stats">
            <li className="kioku__hp"> <h1> {allCharacterData[charIndex].stats.hp} HP <IoHeart /> </h1></li>
            <li className="kioku__atk"> <h1> {allCharacterData[charIndex].stats.atk} ATK <PiSwordDuotone /> </h1> </li>
            <li className="kioku__def"> <h1> {allCharacterData[charIndex].stats.def} DEF <MdShield /></h1> </li>
            <li className="kioku__spd"> <h1> {allCharacterData[charIndex].stats.spd} SPD <GiWalkingBoot /> </h1></li>
        </ul>
        <p className="kioku__spAtk">
            <h2 className="kioku__special">Special Attack:</h2>
        <span className="kioku__spAtkName">{allCharacterData[charIndex].spatk.name}</span><br></br>
        {allCharacterData[charIndex].spatk.desc}
        </p>
        <p className="kioku__spAtk">
            <h2 className="kioku__special">Basic Attack:</h2>
            {allCharacterData[charIndex].basicatk}
        </p>
        <p className="kioku__spAtk">
            <h2 className="kioku__special">Battle Skill:</h2>
        <span className="kioku__spAtkName">{allCharacterData[charIndex].skill.name}</span><br></br>
        {allCharacterData[charIndex].skill.desc}
        </p>
        <p className="kioku__spAtk">
            <h2 className="kioku__special">Ability:</h2>
        <span className="kioku__spAtkName">{allCharacterData[charIndex].ability.name}</span><br></br>
        {allCharacterData[charIndex].ability.desc}
        </p>
        <p className="kioku__spAtk">
            <h2 className="kioku__special">Support Ability:</h2>
        <span className="kioku__spAtkName">{allCharacterData[charIndex].suppability.name}</span><br></br>
        {allCharacterData[charIndex].suppability.desc}
        </p>
        <p className="kioku__spAtk">
            <h2 className="kioku__special">Ascension:</h2>
        Lvl 1: {allCharacterData[charIndex].asc[1]}<br></br><br></br>
        Lvl 2: {allCharacterData[charIndex].asc[2]}<br></br><br></br>
        Lvl 3: {allCharacterData[charIndex].asc[3]}<br></br><br></br>
        Lvl 4: {allCharacterData[charIndex].asc[4]}<br></br><br></br>
        Lvl 5: {allCharacterData[charIndex].asc[5]}<br></br><br></br>
        </p>
    </div>
  )
}

export default KiokuScreen