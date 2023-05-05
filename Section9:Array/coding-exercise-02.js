// Write function find Max

// v1 : for i
function findMaxV1(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  let maxNumber = numberList[0];

  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] > maxNumber) maxNumber = numberList[i];
  }

  return maxNumber;
}

console.log(findMaxV1([1, 15, 1267, 100, 999]));

// v2 : forEach
function findMaxV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  let maxNumber = numberList[0];

  numberList.forEach((x) => (x > maxNumber ? (maxNumber = x) : maxNumber));

  return maxNumber;
}

console.log(findMaxV2([1, 15, 1267, 100, 999]));

//v3 : reduce
function findMaxV3(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  //example 01 :
  // return numberList.reduce((maxNumber, number) => {
  //   if (number > maxNumber) return number;

  //   return maxNumber;
  // });

  // example 02 :
  // return numberList.reduce((maxNumber, number) => {
  //   return (number > maxNumber) ? number : maxNumber;
  // });

  // example 03 :
  return numberList.reduce((maxNumber, number) => (number > maxNumber ? number : maxNumber));
}

console.log(findMaxV3([1, 15, 1267, 100, 999]));
