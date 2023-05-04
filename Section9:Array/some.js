function checkIfOneEvent(numberList) {
  if (!Array.isArray(numberList)) return false;

  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 === 0) return true;
  }

  return false;
}

console.log(checkIfOneEvent([1, 6, 3]));
console.log(checkIfOneEvent([2, 4, 6]));
console.log(checkIfOneEvent([1, 3, 5]));
