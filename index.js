
const messages = []

function writeCards(names, str){ 
    for (let i = 0; i < names.length; i ++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${str} gift!`);
    }
    return messages;
};

function countDown(num) {
    while (num >= 0) {
        console.log(num--);
    }
};

