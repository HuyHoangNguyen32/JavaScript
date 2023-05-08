// C1
export function isDecreasingNumber(n) {
  if (n < 0 || n > 1000000) return false;

  if (n < 10) return false;

  let number = n;
  let prevDegit = 0;

  
  while (number > 0) {
    const lastDigit = number % 10;
    // console.log('lastDigit',lastDigit)
    // console.log('prevDegit1',prevDegit)
    if (prevDegit >= lastDigit && lastDigit > 0) return false;

    prevDegit = lastDigit;
    // console.log('prevDegit2',prevDegit);

    number = Math.trunc(number / 10);
    // console.log('number:', number);
  }
  return true;
}
console.log(isDecreasingNumber(20));
console.log(isDecreasingNumber(321));
console.log(isDecreasingNumber(97531));
console.log(isDecreasingNumber(918753));
console.log(isDecreasingNumber(4398));

// C2
// export function isDecreasingNumber(n) {
//   if (n <= 0 || n > 1000000) return false;

//   if (n < 10) return false;

//   const numberString = n.toString();
//   for (let i = 1; i < numberString.length; i++) {
//     if (numberString[i] >= numberString[i - 1]) return false;
//   }

//   return true;
// }

// console.log(isDecreasingNumber(86420));
// console.log(isDecreasingNumber(321));
// console.log(isDecreasingNumber(97531));
// console.log(isDecreasingNumber(918753));
// console.log(isDecreasingNumber(4398));
