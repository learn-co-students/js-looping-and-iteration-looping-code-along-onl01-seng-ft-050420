// Code your solutions in this file

function writeCards(names, event) {
    let cards = []
    for (let c = 0; c < names.length; c++) {
        cards.push(`Thank you, ${names[c]}, for the wonderful ${event} gift!`);
    }
    return cards;
}

function countDown ( number ) {
    while (number > 0) {
        console.log(number);
        number -= 1;
    }
    console.log(number);
}
