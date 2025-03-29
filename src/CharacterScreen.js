import { CharacterData_five } from './backend/CharacterData_five'
import { CharacterData_four } from './backend/CharacterData_four'
import { CharacterData_three } from './backend/CharacterData_three'
import './CharacterScreen.css'

function CharacterScreen() {

  return (
    <div className="CharacterScreen">
      <img className="char__banner" src="https://madoka-exedra.com/assets_teaser2/img/teaser/ver_black/kv_black_pc.jpg">
        </img>
        <h1>Characters<br></br></h1>
        {CharacterData_five.map((character, index) => (
          <div className="char__card" key={index}>
            <img className="char__type" src={"/exedra-icons/elements/" + character.type + "-elem.png"}></img>
            <img className="char__role" src={"/exedra-icons/role/" + character.role + ".png"}></img>
            <div className="charimg__container">
            <img src={character.image} className="char__image" />
            </div>
          </div>
        ))}
        {CharacterData_four.map((character, index) => (
          <div className="char__card" key={index}>
          <img className="char__type" src={"/exedra-icons/elements/" + character.type + "-elem.png"}></img>
          <img className="char__role" src={"/exedra-icons/role/" + character.role + ".png"}></img>
          <div className="charimg__container">
          <img src={character.image} className="char__image" />
          </div>
        </div>
        ))}
        {CharacterData_three.map((character, index) => (
          <div className="char__card" key={index}>
            <div className="char__text">
            </div>
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