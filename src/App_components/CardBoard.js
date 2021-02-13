import { useEffect, useState } from 'react';
import Card from './card_board_component/Card';
import cardDatas from './card_board_component/cardDatas';

const CardBoard = ({score, setScore }) => {
const myCardDatas = cardDatas;

const [ranIds, setRanIds] = useState([]);

const chooseRandomImgs = () => {
  setRanIds([]);
  while(ranIds.length <= 5){
    const id = `${Math.floor(Math.random() * 16)}`;
    if(!ranIds.includes(id)){
      setRanIds(oldArr => [...oldArr, id])   
    }
  }
}
useEffect(() => {
  console.log(score)
}, [score])

  return (
    <div id="CardBoard">
      {
      myCardDatas.map(card => {
          return (<Card key = { card.imgId } imgId = { card.imgId } imgTitle = { card.imgTitle } imgSrc = { card.imgSrc } score = { score } setScore = { setScore }/> )
      })
      }
      
    </div>
  );
}
 
export default CardBoard;