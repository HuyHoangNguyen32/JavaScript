// 1. Write a function to check if a number is odd/even
function checkNumberOddEven(number) {
  if (number % 2 === 0) return "even";
  if (number % 2 !== 0) return "odd";
}
console.log(checkNumberOddEven(10)); // even
console.log(checkNumberOddEven(5)); // odd

function isEven(n) {
  return n % 2 === 0;
}
console.log(isEven(10)) // true
console.log(isEven(5)) // false

function isOdd(n) {
  return n % 2 !== 0;
}
console.log(isOdd(10)) // false
console.log(isOdd(5)) // true

function isOdd(n) {
  return n % 2 === 1;
}
console.log(isOdd(10)) // false
console.log(isOdd(5)) // true


// 2. Write a function to check if a number is divisible by 5
function isDivisible(n) {
  return n % 5 === 0;
}
console.log(isDivisible(25)) // true
console.log(isDivisible(9)) // false

// 3. Write a function to check if a number is perfect square
function isPerfectSquare(n) {
  if (n <= 0) return false;

  const sqrtN = Math.sqrt(n);
  const sqrtNInt = Math.trunc(sqrtN)
  return sqrtNInt * sqrtNInt === n;
}
console.log(isPerfectSquare(16)) //true
console.log(isPerfectSquare(20)) //false