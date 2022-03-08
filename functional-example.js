function bubbleScores(scores) {
  const arLen = scores.length;
  let temp, prev;

  for (let c of [...Array(arLen).keys()]) {
    prev = scores[c - 1];
    if (prev > scores[c]) {
      temp = prev;
      prev = scores[c];
      scores[c] = temp;
    }
  }

  return scores;
}

const values = [12, 32, 43, 2, 11, 23, 7, 9];
console.log(bubbleScores(values));

/**
  temp = temporary
  prev = follower
  arLen = fixed value
  scores = most recent holder
  c = stepper
**/
