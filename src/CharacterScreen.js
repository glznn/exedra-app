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
      <div char__filterbar>
        <h1>testing</h1>
        <img src={"/exedra-icons/elements/aqua-elem.png"}></img>
        <img src={"/exedra-icons/elements/dark-elem.png"}></img>
        <img src={"/exedra-icons/elements/flame-elem.png"}></img>
        <img src={"/exedra-icons/elements/forest-elem.png"}></img>
        <img src={"/exedra-icons/elements/void-elem.png"}></img>
        <img src={"/exedra-icons/role/attacker.png"}></img>
        <img src={"/exedra-icons/role/breaker.png"}></img>
        <img src={"/exedra-icons/role/buffer.png"}></img>
        <img src={"/exedra-icons/role/debuffer.png"}></img>
        <img src={"/exedra-icons/role/defender.png"}></img>
        <img src={"/exedra-icons/role/healer.png"}></img>
      </div>
        <input type="text" 
        id="userInput" 
        autoComplete='off'
        onChange={filterByName} 
        placeholder="Search kioku...">
        </input>
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