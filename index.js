function writeCards(name, event) {
  let thankYouCards = []
  for (let i = 0; i < name.length; i++) {
    thankYouCards.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
  }
  return thankYouCards
}

function countDown(num) {
  while ( num >= 0 ) {
    console.log( num-- );
  }
}
