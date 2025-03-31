import { useState } from 'react'
import { CharacterData_five } from './backend/CharacterData_five'
import { CharacterData_four } from './backend/CharacterData_four'
import { CharacterData_three } from './backend/CharacterData_three'
import './CharacterScreen.css'

function CharacterScreen() {

  const [filter, setFilter] = useState('');

  function filterByName(e) {
    setFilter(e.target.value.toUpperCase());
  }

  const filteredData = [
    ...CharacterData_five,
    ...CharacterData_four,
    ...CharacterData_three,
  ].filter((character) =>
    character.name.toUpperCase().includes(filter)
  );
  
  
  return (
    <div className="CharacterScreen">
      <img className="char__banner" src="https://madoka-exedra.com/assets_teaser2/img/teaser/ver_black/kv_black_pc.jpg">
        </img>
        <h1>Characters<br></br></h1>
        <input type="text" id="userInput" 
        autoComplete='off'
        onChange={filterByName} placeholder="Search.."></input>
        {filteredData.map((character, index) => (
          <div className="char__card" key={index}>
            <img className="char__type" src={"/exedra-icons/elements/" + character.type + "-elem.png"}></img>
            <img className="char__role" src={"/exedra-icons/role/" + character.role + ".png"}></img>
            <div className="charimg__container">
            <img src={character.image} className="char__image" />
            </div>
          </div>
        ))}
    </div>
  )
}

export default CharacterScreen