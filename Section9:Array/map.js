function map(arr, mappingFn) {
  // mappingFn should be a function
  // arr should be an array
  if (typeof mappingFn !== 'function' || !Array.isArray(arr)) return undefined;

  const newArray = [];

  // mapping
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const newElement = mappingFn(element, i);
    newArray.push(newElement);
  }

  return newArray;
}

console.log(map([1, 2, 3], (x) => x + 1)); // [ 2, 3, 4 ]
console.log(map([2, 3, 5], (x) => x * 2)); // [ 4, 6, 10 ]
console.log(map(['hello', 'world', 'javascript'], (x) => `test-${x}`)); // [ 'test-hello', 'test-world', 'test-javascript' ]

// even index : increment by 1
// odd index : mulitply by 2
console.log(map([2, 3, 5, 7], (x, id) => (id % 2 === 0 ? x + 1 : x * 2))); // [ 3, 6, 6, 14 ]
