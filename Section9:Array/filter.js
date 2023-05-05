function filter(arr, callback) {
  if (typeof callback !== 'function' || !Array.isArray(arr)) return undefined;

  const newArray = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (callback(element, i)) {
      newArray.push(element);
    }
  }

  return newArray;
}

console.log(filter([1, 2, 3], (x) => x % 2 === 0));
console.log(filter([2, 3, 5], (x) => x >= 3));
