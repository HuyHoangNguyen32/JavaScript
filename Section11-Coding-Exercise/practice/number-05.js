export function isPrefectSquare(n) {
  if (n <= 0 || n >= 100000) return false;

  const sqrtNumber = Math.sqrt(n);
  const truncSqrtNumber = Math.trunc(sqrtNumber);
  if (sqrtNumber.toFixed(3) === truncSqrtNumber.toFixed(3)) return true;

  return false;
}

console.log(isPrefectSquare(33));
console.log(isPrefectSquare(101));
console.log(isPrefectSquare(2));
console.log(isPrefectSquare(4));
console.log(isPrefectSquare(9));
console.log(isPrefectSquare(25));
console.log(isPrefectSquare(36));
console.log(isPrefectSquare(49));
