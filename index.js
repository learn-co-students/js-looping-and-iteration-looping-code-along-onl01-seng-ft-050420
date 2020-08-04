function writeCards(array, event) {
    let msgArray = [];
    for (let i = 0; i < array.length; i++){
        msgArray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }
    return msgArray;
}

function countDown(int){
    while (int >= 0){
        console.log(int)
        int--
    }
}