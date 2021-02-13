const Card = ({imgId, imgTitle, imgSrc, score, setScore}) => {
  return (
    <div className = "card" id = { imgId } onClick = {() => {
      setScore(score + 1);
    }}>
      <img className = 'cardImgs' src = { imgSrc } alt = { imgTitle }/>
      <p>{ imgTitle }</p>
    </div>
  );
}
 
export default Card;