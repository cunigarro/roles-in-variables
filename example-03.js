const prompt = require('prompt-sync')();

let
  total = 0,
  highest = 0,
  avg = 0,
  current = 0;
const max = 10;

for (let count of [...Array(max).keys()]) {
  current = Number(prompt(`Current:`));
  total = total + current;
  avg = total / count;
  if (current > highest) {
    highest = current;
  }
}

console.log(highest);

/**
  avg = transformation
  highest = most wanted holder
  current = most recent holder
  total = gatherer
  max = fixed value
  count = stepper
**/
