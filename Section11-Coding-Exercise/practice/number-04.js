export function isPrime(n) {
  if (n <= 0 || n >= 100000) return false;
  if (n < 2) return false;

  for (let i = 2; i <= n - 1; i++) {
    if (n % i === 0) return false;
  }

  return true;
}

console.log(isPrime(10)); // false
console.log(isPrime(1)); // false
console.log(isPrime(2)); // true
console.log(isPrime(3)); // true
console.log(isPrime(4)); // false
console.log(isPrime(5)); // true
console.log(isPrime(6)); // false
console.log(isPrime(7)); // true
console.log(isPrime(8)); // false
console.log(isPrime(9)); // false
console.log(isPrime(11)); // true
