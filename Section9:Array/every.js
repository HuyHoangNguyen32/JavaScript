// v1
function checkIfAllEvent1(numberList) {
  if (!Array.isArray(numberList)) return false;

  let isValid = true;

  for (let i = 0; i < numberList.length; i++) {
    let number = numberList[i];
    if (number % 2 !== 0) {
      isValid = false;
      break;
    }
  }

  return isValid;
}

console.log(checkIfAllEvent1([1, 2, 3]));
console.log(checkIfAllEvent1([2, 4, 6]));

// v2
function checkIfAllEvent2(numberList) {
  if (!Array.isArray(numberList)) return false;

  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 !== 0) return false;
  }

  return true;
}

console.log(checkIfAllEvent2([1, 2, 3]));
console.log(checkIfAllEvent2([2, 4, 6]));
