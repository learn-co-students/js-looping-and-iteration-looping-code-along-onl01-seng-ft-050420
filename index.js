function writeCards(names, event) {
  let cards = []
  for (let count = 0; count < names.length; count++) {
    cards.push(`Thank you, ${names[count]}, for the wonderful ${event} gift!` )
  }
  return cards 
  }
  
function countDown(num) {
    while ( num >= 0 ) {
      console.log( num-- );
    }
}