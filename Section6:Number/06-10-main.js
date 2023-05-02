// 1. Convert hours to seconds
function convertHoursToSeconds(h) {
  if (h <= 0) return -1;

  const SECONDS_PER_HOUR = 60 * 60;
  const result = h * SECONDS_PER_HOUR;

  return result;
}

console.log(convertHoursToSeconds(1)); // 3600

// 2. Given 3 numbers, find max
function findMax(a, b, c) {
  let max = a;

  if (b > max) max = b;
  if (c > max) max = c;

  return max;
}

console.log(findMax(1, 9, 100));

// 3. Given 3 numbers, find max even number
function findMaxEven(a, b, c) {
  let max = Number.NEGATIVE_INFINITY;

  if (a % 2 === 0 && a > max) max = a;
  if (b % 2 === 0 && b > max) max = b;
  if (c % 2 === 0 && c > max) max = c;

  return max;
}

console.log(findMaxEven(5, 9, 17));
console.log(findMaxEven(6, 9, 20));
