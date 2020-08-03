// Code your solutions in this file
function writeCards(names, event) {
    const cards = []
    for (let i = 0; i < names.length; i++) {
        let card = (`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
        cards.push(card)
    }
    return cards
}

writeCards(["Lisa", "Kaitlin", "Jan"], "surprise");

function countDown(num) {
    let i = 0
    while (i <= num) {
        console.log(num);
        num --;
    }
}

countDown(4);