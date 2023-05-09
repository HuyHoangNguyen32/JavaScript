export function hasTwoDigitsWithSum(n, sum) {
  if (n <= 9 || n >= 1000000) return false;
  if (sum <= 0 || sum >= 19) return false;

  const stringNumber = n.toString();
  let sumNumber = 0;

  for (let i = 0; i < stringNumber.length; i++) {
    let digitNumber = Number.parseInt(stringNumber[i]);
    sumNumber += digitNumber;
  }

  if (sumNumber === sum) return true;

  return false;
}

console.log(hasTwoDigitsWithSum(10, 1));
console.log(hasTwoDigitsWithSum(101, 3));
console.log(hasTwoDigitsWithSum(11, 2));
