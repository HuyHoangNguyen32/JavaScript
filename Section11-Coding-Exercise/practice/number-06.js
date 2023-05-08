export function isPerfectNumber(n) {
  if (n <= 1 || n >= 1000) return false;
  let sum = 0;
  for (let i = 1; i < n - 1; i++) {
    if (n % i === 0) sum += i;
  }
  if (sum === n) return true;

  return false;
}

console.log(isPerfectNumber(6));
console.log(isPerfectNumber(28));
console.log(isPerfectNumber(496));
console.log(isPerfectNumber(12));
console.log(isPerfectNumber(88));
console.log(isPerfectNumber(90));
console.log(isPerfectNumber(64));
console.log(isPerfectNumber(100));
