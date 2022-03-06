const prompt = require('prompt-sync')();

const ages = [20, 30, 40, 50, 60, 70];
const itemsSize = ages.length;
let sumOfAges = 0;
let peopleWithSameAge = 0;
let peopleTotal = 0;

for(let i = 0; i < itemsSize; i++) {
  peopleWithSameAge = prompt(`How many people have the age ${ages[i]}?`);
  sumOfAges += ages[i] * peopleWithSameAge;
  peopleTotal += parseInt(peopleWithSameAge);
}

const media = sumOfAges / peopleTotal;

console.log(media);

/**
  itemsSize = fixed value
  sumOfAges = gatherer
  i = stepper
  peopleWithSameAge = most recent holder
**/
