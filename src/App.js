import { useEffect, useState } from "react";
import CardBoard from "./App_components/CardBoard";
import ScoreBoard from "./App_components/ScoreBoard";

function App() {
  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);
  const [clicked, setClicked] = useState([]);

  useEffect(() => {
    if(score > highestScore){
      setHighestScore(score);
    };
  }, [ score ]);

  return (
    <div className="App">
      <h1>Memory Card</h1>
      <ScoreBoard score = { score } highestScore = { highestScore }/>
      <CardBoard />
    </div>
  );
}

export default App;
