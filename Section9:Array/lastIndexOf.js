function checkIndexOf(numberList, key) {
  if (!Array.isArray(numberList)) return false;

  let index = -1;

  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] === key) index = i;
  }

  return index;
}

console.log(checkIndexOf([1, 6, 3], 1));
console.log(checkIndexOf([2, 0, 4, 6, 0], 0));
console.log(checkIndexOf([1, 3, 5, 9, 21, 5], 5));
