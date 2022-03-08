const scores = [12, 32, 43, 2, 11, 23, 7, 9];
const arLen = 7;
let temp, prev;
let mostWantedHolder = 0;

for (let c of [...Array(arLen).keys()]) {
  prev = scores[c - 1];
  if (prev > scores[c]) {
    temp = prev;
    prev = scores[c];
    scores[c] = temp;
  }
}

console.log(scores);

/**
  temp = temporary
  prev = follower
  arLen = fixed value
  c = stepper
**/
