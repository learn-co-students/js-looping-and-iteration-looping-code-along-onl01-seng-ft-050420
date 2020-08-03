// Code your solutions in this file

function writeCards(people, day) {
  let array = [];
  for (let i = 0; i < people.length; i++) {
    array.push(`Thank you, ${people[i]}, for the wonderful ${day} gift!`);
  }
  return array;
}

function countDown(num) {
  let i = 0;
  while (i <= num) {
    console.log(num--);
  }
}