import { useState } from 'react'
import './App.css'

const sleep=(msn=200)=>
{
  return new Promise((resolve)=>setTimeout(resolve,msn))
}
const images=[
  {imgDice:"./assets/images/dice1.png"},
  {imgDice:"./assets/images/dice2.png"},
  {imgDice:"./assets/images/dice3.png"},
  {imgDice:"./assets/images/dice4.png"},
  {imgDice:"./assets/images/dice5.png"},
  {imgDice:"./assets/images/dice6.png"}
]

function App() {

 const [playerDice,setPlayerDice]=useState(0);
 const [computerDice,setComputerDice]=useState(0);
 const [playerDiceImg,setPlayerDiceImg]=useState("src/assets/images/dice1.png");
 const [computerDiceImg,setComputerDiceImg]=useState("src/assets/images/dice1.png");
 const [rolling,setRolling]=useState(false);


 const [playerScore,setPlayerScore]=useState(0);
 const [computerScore,setComputerScore]=useState(0);
 const [highScore,setHighScore]=useState(0);

function imgFunction(diceNumber)
{
  switch (diceNumber) 
  { 
    case 1: 
        return "src/assets/images/dice1.png" ; 
    case 2: 
        return "src/assets/images/dice2.png" ; 
    case 3: 
        return "src/assets/images/dice3.png" ; 
    case 4: 
        return "src/assets/images/dice4.png" ; 
    case 5: 
        return "src/assets/images/dice5.png" ; 
    case 6: 
        return "src/assets/images/dice6.png" ;
  }

}


 const rollDice= async ()=>{
 setRolling(true);

  // const randomPlayerDice=Math.floor(Math.random() * 6) + 1;
  // setPlayerDice(randomPlayerDice);
  // console.log(randomPlayerDice);

  // const randomComputerDice=Math.floor(Math.random() * 6) + 1;
  // setComputerDice(randomComputerDice);
  // console.log(randomPlayerDice);

  // setTimeout(() => {
  //   setRolling(false);
  // }, 1000);

  let randomPlayerDice=0;
  let randomComputerDice=0;
  let newimg="";

  for(let i=0;i<20;i++)
  {
    randomPlayerDice=Math.floor(Math.random() * 6) + 1;
    setPlayerDice(randomPlayerDice);
    newimg=imgFunction(randomPlayerDice);
    setPlayerDiceImg(newimg);
    

    randomComputerDice=Math.floor(Math.random() * 6) + 1;
    setComputerDice(randomComputerDice);
     newimg=imgFunction(randomComputerDice);
     setComputerDiceImg(newimg);

    
    await sleep(300);

    if(i===19)
    {
      setRolling(false);
    }

 


  if(randomComputerDice>randomPlayerDice)
  {
    setComputerScore((prev)=>++prev);
    setHighScore((prev)=>++prev);
  }
  else
  {
    setPlayerScore((prev)=>++prev);
    setHighScore((prev)=>++prev);
  }

}

 }

  return (
    <>
     <h1>Dice Game</h1> 
     <div id="div_dice">
     <div className='zar'>
       <h2>Player</h2>
       <img className='dice_img' src={playerDiceImg}></img>
     </div>
     <div className='zar'>
       <h2>Computer</h2>      
       <img className='dice_img' src={computerDiceImg}></img>
       
     </div>
     </div>
     <button onClick={rollDice}>{rolling? "Rolling": "Roll Dice"}</button>
     <h2>Scores</h2>
     <p>Player Score:{playerScore}</p>
     <p>Computer Score:{computerScore}</p>
     {/* <p>High Score:{highScore}</p> */}
    </>
  )
}

export default App
