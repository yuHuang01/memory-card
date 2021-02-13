import { useEffect, useState } from 'react';
import Card from './card_board_component/Card';
import cardDatas from './card_board_component/cardDatas';

const CardBoard = ({score, setScore, clicked, setClicked, setIsGameOver }) => {
const myCardDatas = cardDatas;

const [ranIds, setRanIds] = useState([]);
  
const chooseNewRanIds = () => {
  let newRanNums = [];
    while(newRanNums.length !== 5){
      const ranId = `${Math.floor(Math.random() * 16)}`
      if(!newRanNums.includes(ranId)){
        (newRanNums.length % 2)? newRanNums.push(ranId) : newRanNums.unshift(ranId);
      }
    }
  setRanIds(newRanNums);
};

useEffect(() => {
  setRanIds([]);
  chooseNewRanIds();
}, [score])

  return (
    <div id="CardBoard">
      {
      myCardDatas.map(card => {
        if(ranIds.includes( card.imgId )){
          return (<Card key = { card.imgId } card = { card } score = { score } setScore = { setScore }
          clicked = { clicked } setClicked = { setClicked } setIsGameOver = { setIsGameOver }/> )
        }
      })
      }
      
    </div>
  );
}
 
export default CardBoard;