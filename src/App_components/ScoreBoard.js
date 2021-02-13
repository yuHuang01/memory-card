const ScoreBoard = ({score, highestScore}) => {
  return (
    <div id="ScoreBoard">
      <p>Current Score: { score }</p>
      <p>Highest Score: { highestScore }</p>
    </div>
  );
}
 
export default ScoreBoard;