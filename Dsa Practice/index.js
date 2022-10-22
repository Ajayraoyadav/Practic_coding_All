//  1. Find How many Prime Number exist between

var PrimeNumber = 10;
for (var num = 1; num <= PrimeNumber; num++) {
  var count_factors = 0;

  for (var i = 1; i <= num; i++) {
    if (num % i == 0) {
      count_factors++;
    }
  }
  if (count_factors == 2) {
    console.log('Prime Number', num);
  }
}
