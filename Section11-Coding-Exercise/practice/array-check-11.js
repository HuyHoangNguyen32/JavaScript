export function isSymmetricList(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  for (let number of numberList) {
    if (typeof number !== 'number') return false;
  }

  const number1 = +numberList.join('');
  const number2 = +numberList.reverse().join('');

  // console.log(typeof number1, number1);
  // console.log(typeof number2, number2);

  return number1 === number2;
}
const numberList = [1, 2, 3, 4, 5, 4, 3, 2, 1];
console.log(isSymmetricList(numberList));
