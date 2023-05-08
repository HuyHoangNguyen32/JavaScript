
export function isIncreasingNumberByDistance(n, x) {
  if (n <= 9 || n >= 1000000) return false;
  if (x <= 0 || x >= 5) return false;

  const numberString = n.toString();
  let flag1 = true;
  let flag2 = true;

  for (let i = 1; i < numberString.length; i++) {
    if (numberString[i] < numberString[i - 1]) return (flag1 = false);
  }

  for (let j = 1; j < numberString.length; j++) {
    if (Number.parseInt(numberString[j]) - Number.parseInt(numberString[j - 1]) !== x)
      return (flag2 = false);
  }

  if (flag1 === false || flag2 === false) return false;

  return true;
}

console.log(isIncreasingNumberByDistance(125, 1));
console.log(isIncreasingNumberByDistance(11, 1));
console.log(isIncreasingNumberByDistance(123, 1));
console.log(isIncreasingNumberByDistance(135, 2));
console.log(isIncreasingNumberByDistance(135, 1));
