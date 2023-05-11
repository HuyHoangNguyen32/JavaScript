// Example 1 : for i
// export function hasOddNumberDivisibleBy3(numberList) {
//   if (!Array.isArray(numberList) || numberList.length === 0) return false;
//   for (let i = 0; i < numberList.length; i++) {
//     if (numberList[i] % 2 !== 0 && numberList[i] % 3 === 0) return true;
//   }
//   return false;
// }

/* ############################# */
// Example 2 : forEach
// function isNumber(number) {
//   return number % 2 !== 0 && number % 3 === 0;
// }

// export function hasOddNumberDivisibleBy3(numberList) {
//   if (!Array.isArray(numberList) || numberList.length === 0) return false;

//   let hasNumberFlag = false;

//   numberList.forEach((number) => {
//     if (isNumber(number)) hasNumberFlag = true;
//   });

//   return hasNumberFlag;
// }

/* ############################# */
// Example 3 : find
// function isNumber(number) {
//   return number % 2 !== 0 && number % 3 === 0;
// }

// export function hasOddNumberDivisibleBy3(numberList) {
//   if (!Array.isArray(numberList) || numberList.length === 0) return false;

//   const result = Boolean(numberList.find((number) => isNumber(number)));

//   return result;
// }

// console.log(hasOddNumberDivisibleBy3([1, 2, 12, 15]));


/* ############################# */
// Example 4 : findIndex
// function isNumber(number) {
//   return number % 2 !== 0 && number % 3 === 0;
// }

// export function hasOddNumberDivisibleBy3(numberList) {
//   if (!Array.isArray(numberList) || numberList.length === 0) return false;

//   const result = numberList.findIndex((number) => isNumber(number)) > 0;

//   return result;
// }

// console.log(hasOddNumberDivisibleBy3([1, 2, 12, 15]));


/* ############################# */
// Example 5 : filter
function isNumber(number) {
  return number % 2 !== 0 && number % 3 === 0;
}

export function hasOddNumberDivisibleBy3(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  const result = numberList.filter((number) => isNumber(number)).length > 0;

  return result;
}

console.log(hasOddNumberDivisibleBy3([1, 2, 12, 15]));