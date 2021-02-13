import { useEffect, useState } from "react";
import CardBoard from "./App_components/CardBoard";
import ScoreBoard from "./App_components/ScoreBoard";
import GameOver from "./GameOver";

function App() {
  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);
  const [clicked, setClicked] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false)

  useEffect(() => {
    if(score > highestScore){
      setHighestScore(score);
    };
  }, [ score ]);

  return (
    <div className="App">
      <h1>Memory Card</h1>
      <ScoreBoard score = { score } highestScore = { highestScore }/>
      <CardBoard score = { score } setScore = { setScore } clicked = { clicked } setClicked = { setClicked } setIsGameOver = { setIsGameOver }/>
      {(isGameOver)? <GameOver score = { score } setIsGameOver = { setIsGameOver } setClicked = { setClicked } setScore = { setScore }/> : null}
    </div>
  );
}

export default App;
