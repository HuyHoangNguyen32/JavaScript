// Example 1 : for...i
// export function hasEvenNumberGreaterThanNumber(numberList, n) {
//   if (!Array.isArray(numberList) || numberList.length === 0) return false;

//   for (let i = 0; i < numberList.length; i++) {
//     if (numberList[i] % 2 === 0 && numberList[i] > n) return true;
//   }

//   return false;
// }

// console.log(hasEvenNumberGreaterThanNumber([1, 1, 2, 3, 17], 2));

/* ################################### */
// Example 2 : forEach
// function isNumber(number, n) {
//   if (!number) return false;
//   return number % 2 === 0 && number > n;
// }

// export function hasEvenNumberGreaterThanNumber(numberList, n) {
//   if (!Array.isArray(numberList) || numberList.length === 0) return false;

//   let hasNumberFlag = false;
//   numberList.forEach((number) => {
//     if (isNumber(number, n)) hasNumberFlag = true;
//   });

//   return hasNumberFlag;
// }

// console.log(hasEvenNumberGreaterThanNumber([1, 1, 2, 3, 18], 2));

/* ################################### */
// Example 3 : find
// function isNumber(number, n) {
//   if (!number) return false;
//   return number % 2 === 0 && number > n;
// }

// export function hasEvenNumberGreaterThanNumber(numberList, n) {
//   if (!Array.isArray(numberList) || numberList.length === 0) return false;

//   const result = Boolean(numberList.find((number) => isNumber(number, n)));

//   return result;
// }

// console.log(hasEvenNumberGreaterThanNumber([1, 1, 2, 3, 17], 2));

/* ################################### */
// Example 4 : findIndex
// function isNumber(number, n) {
//   if (!number) return false;
//   return number % 2 === 0 && number > n;
// }

// export function hasEvenNumberGreaterThanNumber(numberList, n) {
//   if (!Array.isArray(numberList) || numberList.length === 0) return false;

//   const result = numberList.findIndex((number) => isNumber(number, n)) > 0;

//   return result;
// }

// console.log(hasEvenNumberGreaterThanNumber([1, 1, 2, 3, 18], 2));

/* ################################### */
// Example 5 : filter
function isNumber(number, n) {
  if (!number) return false;
  return number % 2 === 0 && number > n;
}

export function hasEvenNumberGreaterThanNumber(numberList, n) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  const result = numberList.filter((number) => isNumber(number, n)).length > 0;

  return result;
}

console.log(hasEvenNumberGreaterThanNumber([1, 1, 2, 3, 18], 2));
