// Code your solutions in this file

function writeCards(array) {
    return array.map(name => `Thank you, ${name}, for the wonderful surprise gift!`)
}


function countDown(integer) {
    for (let i = integer; i >= 0; i--) {
        console.log(i)
    }
};