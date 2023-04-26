const getSumOfEvenFibbonacciNumbers = function(upto, secondLastTerm, lastTerm) {
  let sum = 0;
  let nextTerm = lastTerm;

  while(nextTerm < upto) {
    if(nextTerm % 2 === 0 ) {
      sum += nextTerm;
    }

    nextTerm = secondLastTerm + lastTerm;
    secondLastTerm = lastTerm;
    lastTerm = nextTerm;
  }

  return sum;
}

console.log(getSumOfEvenFibbonacciNumbers(4000000, 1, 2));
