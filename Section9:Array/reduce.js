// reduce(arr, callback, initialValue)
// rules:
// - arr should be an array and callback should be a function
// - arr.length = 0 and initialValue === undefined --> throw error
// - arr.length = 0 and initialValue !== undefined --> return initialValue

function reduce(arr, callback, initialValue) {
  if (!Array.isArray(arr) || typeof callback !== 'function') {
    throw new Error('Invalid parameter');
  }

  // arr is an array
  if (arr.length === 0) {
    if (initialValue === undefined) {
      throw new Error('Should have initialValue when arr is empty');
    }
    return initialValue;
  }

  const hasInitialValue = initialValue !== undefined;
  const startIndex = hasInitialValue ? 0 : 1;
  let accumulator = hasInitialValue ? initialValue : arr[0];

  for (let i = startIndex; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i], i);
  }

  return accumulator;
}

function calcSum(prevSum, number) {
  return prevSum + number;
}

console.log(reduce([2, 4, 6], calcSum, 0));

console.log(
  reduce(
    [2, 4, 6],
    function (prevSum, number) {
      return prevSum + number;
    },
    0
  )
);

console.log(reduce([2, 4, 6], (prevSum, number) => prevSum + number));
