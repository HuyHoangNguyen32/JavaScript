// random a number in range of [0, n]
// Math.random() => [0, 1)

function randomNumber(n) {
  if (n <= 0) return -1;

  const random = Math.random() * n;
  const result = Math.round(random);

  return result;
}

console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
