import React from "react"
import { ReactDOM } from "react-dom/client"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"
import './App.css';

import Die from './components/Die';

function App() {
  function allNewDice(){
    const newDice=[]
    for(let i=0;i<12;i++){
      
    newDice.push(
      {
        value:Math.floor(Math.random()*6+1),
        isheld:false,
        id:nanoid()
      }
                )
    }
    return newDice
  }
  
  const [Dice,setDice]=React.useState(allNewDice());
  const [won,setWon]=React.useState(false)



  React.useEffect(()=>{
 const allheld=Dice.every(die=>die.isheld)
 
 const firstVal=Dice[0].value
 const allSame=Dice.every(die=>die.value===firstVal)

 if(allheld && allSame){
  setWon(true)
 
 }
  },[Dice])


  const diceElements=Dice.map(die=>{
    return <Die value={die.value} isheld={die.isheld} onHold={()=>onHold(die.id)} key={die.id}/>
  })
 function rollDice(){
if(won){
  setDice(allNewDice())
  setWon(false)
}
else{
  setDice(oldDice=>oldDice.map(die=>{
      return die.isheld?
         die:{...die,value:Math.floor(Math.random()*6+1)}
    })
  )
 }}

 function onHold(id){
    setDice(oldDice=>oldDice.map(die=>{
      return die.id===id?
              {...die,isheld:!die.isheld}:die
    }
    ))
  }


  
  return (
    <>
    <main>
    {won && <Confetti width={window.innerWidth} height={window.innerHeight}/>}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll Untill all the dice are the same. Click each Die to freez it at its current value betwen rolls.</p>
      <div className="dice-container">
        {diceElements}
      </div>
      <button  className="roll" onClick={rollDice}>{won?"Reset":"Roll"}</button>

    </main>


    
    </>
  );
}

export default App;
