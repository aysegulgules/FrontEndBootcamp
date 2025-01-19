import { useState } from 'react'
import './App.css'

const sleep=(msn=200)=>
{
  return new Promise((resolve)=>setTimeout(resolve,msn))
}


function App() {

 const [playerDice,setPlayerDice]=useState(0);
 const [computerDice,setComputerDice]=useState(0);
 const [rolling,setRolling]=useState(false);


 const [playerScore,setPlayerScore]=useState(0);
 const [computerScore,setComputerScore]=useState(0);
 const [highScore,setHighScore]=useState(0);

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

  for(let i=0;i<20;i++)
  {
    randomPlayerDice=Math.floor(Math.random() * 6) + 1;
    setPlayerDice(randomPlayerDice);

    randomComputerDice=Math.floor(Math.random() * 6) + 1;
    setComputerDice(randomComputerDice);
    
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
     <div>
       <h2>Player</h2>
       <div>{playerDice}</div>
     </div>
     <div>
       <h2>Computer</h2>
       <div>{computerDice}</div>
     </div>
     <button onClick={rollDice}>{rolling? "Rolling": "Roll Dice"}</button>
     <h2>Scores</h2>
     <p>Player Score:{playerScore}</p>
     <p>Computer Score:{computerScore}</p>
     <p>High Score:{highScore}</p>
    </>
  )
}

export default App
