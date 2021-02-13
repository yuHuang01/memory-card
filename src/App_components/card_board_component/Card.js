const Card = ({ card, score, setScore, clicked, setClicked, setIsGameOver }) => {
  return (
    <div className = "card" id = { card.imgId } onClick = {(e) => {
      if(clicked.includes(e.target.id)){
        setIsGameOver(true);
      }else{
        setScore(score + 1);
        setClicked(arr => [...arr, e.target.id])
      }
    }}>
      <img className = 'cardImgs' src = { card.imgSrc } alt = { card.imgTitle }/>
      <p>{ card.imgTitle }</p>
    </div>
  );
}
 
export default Card;