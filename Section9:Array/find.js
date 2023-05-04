// v1
function findFirstEven(numberList) {
  if (!Array.isArray(numberList)) return undefined;

  for (var i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 === 0) return numberList[i];
  }

  return undefined;
}

console.log(findFirstEven([1, 6, 3, 4, 5]));
console.log(findFirstEven([1, 3, 5]));

// v2
function findFirstEven(numberList, callback) {
  if (!Array.isArray(numberList)) return undefined;

  for (var i = 0; i < numberList.length; i++) {
    if (callback(numberList[i], i)) return numberList[i];
  }

  return undefined;
}

function isEven(number) {
  return number % 2 === 0;
}

console.log(findFirstEven([1, 2, 3, 5], isEven));

// inline function
// anonymous function
console.log(
  findFirstEven([1, 2, 3, 5], function (number) {
    return number % 2 === 0;
  })
);

// arrow function
console.log(findFirstEven([1, 2, 3, 5], (number) => number % 2 === 0));
console.log(findFirstEven([1, 2, 3, 5], (number) => number > 3));
