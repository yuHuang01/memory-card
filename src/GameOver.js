const GameOver = ({ score, setIsGameOver, setClicked, setScore }) => {
  return (
    <div id="GameOver" onClick = {() => {
      setIsGameOver(false);
      setClicked([]);
      setScore(0)
    }}>
      <h1>Game Over!</h1>
      <p>Your score was { score }</p>
    </div>
  );
}
 
export default GameOver;