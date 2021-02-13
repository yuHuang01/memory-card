import Card from './card_board_component/Card';
import cardDatas from './card_board_component/cardDatas';

const CardBoard = ({ cards }) => {
const myCardDatas = cardDatas;

const chooseRandomImgs = () => {
  return Math.floor(Math.random() * 16);
}

  return (
    <div id="CardBoard">
      {myCardDatas.map(card => {

        return (<Card key = { card.imgId } imgId = { card.imgId } imgTitle = { card.imgTitle } imgSrc = { card.imgSrc }/> )
      })}
      
    </div>
  );
}
 
export default CardBoard;