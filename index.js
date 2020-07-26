const names = ['Ada', 'Brendan', 'Ali']
let array = []

function writeCards(names) {
  for (let i = 0; i < names.length; i ++) {
    array[i] = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
  }

  return array;
}

function countDown(num) {
  while (num >= 0) {
    console.log(num);
    num --;
  }
  
}