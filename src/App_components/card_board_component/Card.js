const Card = ({imgId, imgTitle, imgSrc}) => {
  return (
    <div className = "card" id = { imgId }>
      <img className = 'cardImgs' src = { imgSrc } alt = { imgTitle }/>
      <h3>{ imgTitle }</h3>
    </div>
  );
}
 
export default Card;