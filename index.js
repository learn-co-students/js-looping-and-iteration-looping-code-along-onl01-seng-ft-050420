const names = ["Ada", "Brendan", "Ali"]
let array = []

function writeCards(names, event) {

    for (let i = 0; i < names.length; i++) {
        let thanks = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        array.push(thanks); 
    }
    return array;
}

function countDown(num) {
    while (num >= 0) {
        console.log(num);
        num --;
    }
}