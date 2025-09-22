import React from 'react'

import { useState, useEffect } from 'react';
import { CharacterData_three } from './backend/CharacterData_three';
import { CharacterData_four } from './backend/CharacterData_four';
import { CharacterData_five } from './backend/CharacterData_five';

import './SimulatorScreen.css'

function SimulatorScreen() {

  // Open in new tab.

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  }


  const [single, singlePull] = useState("Single Draw");
  const [ten, tenPull] = useState("x10 Draw");

  const [character, setCharacter] = useState(null);
  const [count, setCount] = useState(0);
  const [threeCount, setThree] = useState(0);
  const [fourCount, setFour] = useState(0);
  const [fiveCount, setFive] = useState(0);
  const [buttonCount, setButtonCount] = useState(0);


  const [filter, setFilter] = useState();
  const [notMulti, setMulti] = useState(false);

  const [summons, setSummons] = useState([]);


  // When there is a new character, trigger effect
  useEffect(() => {
    if (character) {
      setFilter(true);
    }
  }, [character]);
  
  useEffect(() => {
    if (buttonCount % 2 === 0) {
      setSummons([]);
    }
  }, [buttonCount])


  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function getRarity() {
    return (randomIntFromInterval(1, 100)) 
  }

  function getKioku(localCount) {

    var result;
    var char;
    const rarity = getRarity();
    
    if (localCount % 10 !== 0) {
      if (rarity <= 80) {
        const index = randomIntFromInterval(0, CharacterData_three.length -1);
        char = CharacterData_three[index];
        setThree(prev => prev + 1);
        console.log(threeCount);

      }
      else if (rarity > 80 && rarity <= 97) {
        const index = randomIntFromInterval(0, CharacterData_four.length -1);
        char = CharacterData_four[index];
        setFour(prev => prev + 1);
        console.log(fourCount);
      }
      else {
        const index = randomIntFromInterval(0, CharacterData_five.length - 1);
        char = CharacterData_five[index];
        setFive(prev => prev + 1);
        console.log(fiveCount);
      }
    }
    else {
      if (rarity <= 97) {
        const index = randomIntFromInterval(0, CharacterData_four.length -1);
        char = CharacterData_four[index];
        setFour(prev => prev + 1);
        console.log(fourCount);
       }
      else {
        const index = randomIntFromInterval(0, CharacterData_five.length -1);
        char = CharacterData_five[index];
        setFive(prev => prev + 1);
        console.log(fiveCount);
       }
    }
    
    result = "Summon x1 Again?"
    setCharacter(char);

    // Updater functions style : Important for loops ! 
    setSummons(prev => {
      const updated = [...prev, char];
      return updated;
    })

    setMulti(false);
    return result;
  }

  function getTen() {
    var localCount = count;

    for (var i = 0; i < 9; i++) {
      localCount++;
      getKioku(localCount)
    }

    setCount(count+10);
    setMulti(true);

    return "Summon x10 Again?";
  }

  return (
    <div className="SimulatorScreen">
        <div className="sim__banner">
            <img id="img" 
            src="/images/kyubey-background.webp"
            fetchPriority='high'
            alt="Kyubey Placeholder"
            ></img>
        </div>
        <div className="sim__header">
          <h1 className="app__pink">Simulator</h1>
          <h2>Try your luck here!</h2>
        </div>
        <div className="sim__display">
          <div className="sim__buttons">
          <button className="button-85" onClick = {() => {
          setButtonCount(buttonCount + 1);
          if (buttonCount % 2 === 0) {
            const nextCount = count + 1;
            setCount(nextCount);
            const result = getKioku(nextCount);
            singlePull(result);
          }
          else {
            singlePull("Single Draw");
          }
          }}> 
          <pre> {single} </pre> 
          </button>

          <button className="button-85" onClick = { () => {
            setButtonCount(buttonCount + 1);
            if (buttonCount % 2 === 0) {
              getKioku(count);
              tenPull(getTen());
            }
            else {
              tenPull("x10 Draw");
            }
          }
          }>  
          <pre> {ten} </pre>
          </button>
        </div>

        {character && (
          <div className="sim__gacha">
            {summons.map((val, key) => (
                <div className="sim__card">
                  <img src={val.image} title = {val.name} className={filter ? 'sim__imgFilter' : 'sim__imgNoFilter'} 
                  alt={val.name}
                  checkMulti={notMulti.toString()}
                  onClick = {() => { 
                    console.log(notMulti.toString())
                    setFilter(!filter)
                    if (!filter) {
                      openInNewTab(`/characters/${val.spatk.name}`);
                    }
                  }}
                ></img>
                </div>

              )
            )}
            </div>
        )}
        </div>
        <div className="sim__footer"> 
          <div className="sim__stats">
            <ul className="sim__statList">
              <h1 className="sim__total"> Total Pulls: {count} </h1>
              <li>
                <h1>Total Five Stars: {fiveCount}</h1>
                <h2 className="sim__fiveStar"> 5* Rate: {Math.round(((fiveCount / count) * 100 )) / 100}%</h2>
              </li>
              <li>
                <h1>Total Four Stars: {fourCount}</h1>
                <h2 className="sim__fourStar"> 4* Rate: {Math.round(((fourCount / count) * 100 )) / 100}%</h2>
              </li>
              <li>
                <h1 >Total Three Stars: {threeCount}</h1>
                <h2 className="sim__threeStar"> 3* Rate: {Math.round(((threeCount / count) * 100 )) / 100}%</h2>
              </li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default SimulatorScreen