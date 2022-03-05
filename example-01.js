const prompt = require('prompt-sync')();

const ages = [20, 30, 40, 50, 60, 70];
const itemsSize = ages.length; // itemsSize = Fixed value
let sumOfAges = 0; // sumOfAges = Gatherer
let peopleWithSameAge = 0;
let peopleTotal = 0;

for(let i = 0; i < itemsSize; i++) { // i = Stepper
  peopleWithSameAge = prompt(`How many people have the age ${ages[i]}?`); // peopleWithSameAge = Most recent holder
  sumOfAges += ages[i] * peopleWithSameAge;
  peopleTotal += parseInt(peopleWithSameAge);
}

const media = sumOfAges / peopleTotal;

console.log(media);
