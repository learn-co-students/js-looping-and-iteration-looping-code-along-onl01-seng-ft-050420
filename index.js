// Code your solutions in this file

function writeCards(names, event) {
    let msgs = []
 for (let i = 0; i < names.length  ; i++) {
    msgs.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    };
 return msgs
}

function countDown(positiveNum) {
    let i = 0;
    while (positiveNum >= i) {
        console.log(positiveNum)
        positiveNum--

    }
}