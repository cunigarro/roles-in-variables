const scores = [12, 32, 43, 2, 11, 23, 7, 9];
const arLen = 7;
let temp, prev;
let mostWantedHolder = 0;

for (let c of [...Array(arLen - 1).keys()]) {
  prev = scores[c];
  if (prev > scores[c + 1]) {
    temp = prev;
    prev = scores[c + 1];
    scores[c + 1] = temp;
  }
}

console.log(scores);

/**
  temp = temporary
  prev = follower
  arLen = fixed
  c = stepper
**/
