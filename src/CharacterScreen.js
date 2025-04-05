import { useState } from 'react'
import { CharacterData_five } from './backend/CharacterData_five'
import { CharacterData_four } from './backend/CharacterData_four'
import { CharacterData_three } from './backend/CharacterData_three'
import { ElementData, RoleData, RarityData } from './backend/FilterBarData'
import { BrowserRouter as Router, Route, Routes, Link, useNavigate} from 'react-router-dom';
import './CharacterScreen.css'

function CharacterScreen() {
  const [elementFilter, setElementFilter] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const [rarityFilter, setRarityFilter] = useState('');
  const [nameFilter, setNameFilter] = useState('');

  const navigate = useNavigate();

  const allCharacterData = [
    ...CharacterData_five,
    ...CharacterData_four,
    ...CharacterData_three
  ]

  const filteredData = allCharacterData.filter((character) => {
    if (nameFilter && !character.name.toUpperCase().includes(nameFilter)) {
      return false;
    }

    if (elementFilter && character.type !== elementFilter) {
      return false;
    }

    if (roleFilter && character.role !== roleFilter) {
      return false;
    }

    
    if (rarityFilter && character.rarity !== rarityFilter) {
      return false;
    }

    return true;
  })

  function handleNameFilter(e) {
    setNameFilter(e.target.value.toUpperCase());
  }

  const handleElementFilter = (element) => {
    setElementFilter(element === elementFilter ? '' : element);
  }

  const handleRoleFilter = (role) => {
    setRoleFilter(role === roleFilter ? '' : role);
  }

  const handleRarityFilter = (rarity) => {
    setRarityFilter(rarity === rarityFilter ? '' : rarity);
  }


  return (
    <div className="CharacterScreen">
      <img className="char__banner" src="https://madoka-exedra.com/assets_teaser2/img/teaser/ver_black/kv_black_pc.jpg">
        </img>

      <div className="char__bannerMessage">
      <h1><span className="home__gg">Characters</span></h1>
      <h4>View of all available Kioku</h4>
      </div>
      <div className="char__filterbar">
        <ul className="char__elemFilter">
          {ElementData.map((val, key) => {
            return (
              <li key={key} 
              className={`char__elemRow ${val.type === elementFilter ? 'active' : ''}`}
              onClick={() => handleElementFilter(val.type)}
              >
                <div id="elemIcon">
                  <img className="char__elemPng" src={val.image} title={val.type}></img>
                </div>
              </li>
            )
          })}
        </ul>
        <ul className="char__roleFilter">
          {RoleData.map((val, key) => {
            return (
              <li key={key} 
              className={`char__roleRow ${val.role === roleFilter ? 'active' : ''}`}
              onClick={() => handleRoleFilter(val.role)}
              >
                <div id="roleIcon">
                  <img className="char__roleImg" src={val.image} title={val.type}></img>
                </div>
              </li>
            )
          })}
        </ul>
        <ul className="char__rarityFilter">
          {RarityData.map((val, key) => {
            return (
              <li key={val.rarity} 
              className={`char__rarityRow ${val.rarity === rarityFilter ? 'active' : ''}`}
              onClick={() => handleRarityFilter(val.rarity)}
              >
                <div id="rarityIcon">
                  {val.rarity} {val.icon}
                </div>
              </li>
            )
          })}
        </ul>
      </div>
      <input className="char__search" type="text" 
        id="userInput" 
        autoComplete='off'
        onChange={handleNameFilter} 
        placeholder="Search for kioku...">
        </input>
      <div className="char__list">
        {filteredData.map((character, index) => (
          <div className="char__card" key={index}>
            <img className="char__type" src={"/exedra-icons/elements/" + character.type.toLowerCase() + "-elem.png"}></img>
            <img className="char__role" src={"/exedra-icons/role/" + character.role.toLowerCase() + ".png"}></img>
            <div className="charimg__container">
            <img src={character.image} className="char__image"
            onClick={() => {
              navigate(`/characters/${character.spatk.name}`);
            }}
             />
            </div>
          </div>
        ))}
        </div>
    </div>
  )
}

export default CharacterScreen