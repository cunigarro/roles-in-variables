const prompt = require('prompt-sync')();

const ages = [20, 43, 56, 54, 32, 34];
const itemsSize = ages.length; // itemsSize = Fixed value
let totalAges = 0; // totalAges = Gatherer
let peopleWithSameAge = 0;

for(let i = 0; i < itemsSize; i++) { // i = Stepper
  peopleWithSameAge = prompt("How many people have the same age?");
  totalAges += (ages[i]);
}

console.log(totalAges);
