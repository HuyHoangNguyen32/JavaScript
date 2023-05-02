// random a number in range of [a, b]

function randomNumberInRange(a, b) {
  if (a >= b) return -1;

  const random = Math.random() * (b - a);
  const result = Math.round(random) + a;

  return result;
}


console.log(randomNumberInRange(0, 9));
console.log(randomNumberInRange(10, 99));
console.log(randomNumberInRange(100, 999));
console.log(randomNumberInRange(1000, 9999));