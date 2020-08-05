// Code your solutions in this file
function countDown(num){
  while (num >= 0){
    console.log(num)
    num--
  }
}

function writeCards(gift, event){
  let cards = []
  for (let i = 0; i < gift.length; i++) {
   cards.push(`Thank you, ${gift[i]}, for the wonderful ${event} gift!`);
  }
  return cards
  
}
