const names = ["Lisa", "Kaitlin", "Jan"];
const array = []

function writeCards(names) {
    //good idea to define the variable array here
    for (let i = 0; i < names.length; i++) {
        array.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }
    return array
}


function countDown(num) {
    let i = 0
    while (i <= num) {
        console.log(num);
        num -= 1;
    }
}

