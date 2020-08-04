function writeCards(array, event){
    let response = []
    for(let i = 0; i < array.length; i++){
        response.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }
    return response;
}

function countDown(integer) {
    let i = integer
    while(i >= 0){
        console.log(i)
        i--
    }
}
