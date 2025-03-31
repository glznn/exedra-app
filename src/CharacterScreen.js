import { useState } from 'react'
import { CharacterData_five } from './backend/CharacterData_five'
import { CharacterData_four } from './backend/CharacterData_four'
import { CharacterData_three } from './backend/CharacterData_three'
import { ElementData, RoleData, RarityData } from './backend/FilterBarData'
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

      <div className="char__bannerMessage">
      <h1>Characters<br></br></h1>
      </div>
      <div className="char__filterbar">
        <ul className="char__elemFilter">
          {ElementData.map((val, key) => {
            return (
              <li key={key} className="char__elemRow">
                <div id="elemIcon">
                  <img src={val}></img>
                </div>
              </li>
            )
          })}
        </ul>
        <ul className="char__roleFilter">
          {RoleData.map((val, key) => {
            return (
              <li key={key} className="char__roleRow">
                <div id="roleIcon">
                  <img className="char__roleImg" src={val}></img>
                </div>
              </li>
            )
          })}
        </ul>
        <ul className="char__rarityFilter">
          {RarityData.map((val, key) => {
            return (
              <li key={val.rarity} className="char__rarityRow">
                <div id="rarityIcon">
                  {val.rarity} {val.icon}
                </div>
              </li>
            )
          })}
        </ul>
        <input type="text" 
        id="userInput" 
        autoComplete='off'
        onChange={filterByName} 
        placeholder="Search kioku...">
        </input>
      </div>
      <div className="char__list">
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
    </div>
  )
}

export default CharacterScreen