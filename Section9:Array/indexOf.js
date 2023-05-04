function checkIndexOf(numberList, key) {
  if (!Array.isArray(numberList)) return false;

  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] === key) return i;
  }

  return -1;
}

console.log(checkIndexOf([1, 6, 3], 1));
console.log(checkIndexOf([2, 4, 6], 0));
console.log(checkIndexOf([1, 3, 5, 9, 21, 5], 5));
