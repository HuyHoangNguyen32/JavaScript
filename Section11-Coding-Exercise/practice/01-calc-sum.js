// Bài 1: Tính S(n) = 1 + 2 + 3 + … + n

// C1 : for i
export function calculateSum(n) {
  if (n <= 0) return 0;

  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

console.log(calculateSum(1));

// C2 : S(n) = n * (n+1) / 2
export function calculateSum2(n) {
  if (n <= 0) return 0;

  return (n * (n + 1)) / 2;
}

console.log(calculateSum2(1));
console.log(calculateSum2(2));
console.log(calculateSum2(3));
