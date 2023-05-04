function findIndex(numberList, callback) {
  if (!Array.isArray(numberList)) return undefined;

  for (var i = 0; i < numberList.length; i++) {
    if (callback(numberList[i], i)) return i;
  }

  return undefined;
}

// arrow function
console.log(findIndex([1, 2, 3, 5], (number) => number % 2 === 0));
console.log(findIndex([1, 2, 3, 5], (number) => number > 3));
console.log(findIndex([1, 2, 3, 5], (number) => number % 2 !== 0));
