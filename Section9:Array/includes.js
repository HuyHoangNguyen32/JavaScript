function checkIncludes(numberList, key) {
  if (!Array.isArray(numberList)) return false;

  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] === key) return true;
  }

  return false;
}

console.log(checkIncludes([1, 6, 3], 1));
console.log(checkIncludes([2, 0, 4, 6, 0], 99));
console.log(checkIncludes([1, 3, 5, 9, 21, 5], 15));
