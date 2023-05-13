function fibonacciNumber(number) {
  const fibonacciList = [0, 1];

  let n1 = 0,
    n2 = 1,
    nextTerm;

  nextTerm = n1 + n2;

  while (nextTerm < number) {
    n1 = n2;
    n2 = nextTerm;

    fibonacciList.push(nextTerm);

    nextTerm = n1 + n2;
  }

  return fibonacciList;
}

export function hasfibonacciNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  for (let number of numberList) {
    if (typeof number !== 'number') return false;
  }

  const fibonacciList = fibonacciNumber(100);

  console.log(fibonacciList);

  for (let i = 0; i < numberList.length; i++) {
    if (fibonacciList.includes(numberList[i])) return true;
  }

  return false;
}
