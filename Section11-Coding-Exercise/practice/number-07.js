export function isSymetricNumber(n) {
  if (n <= 1 || n >= 1000000) return false;

  const arrayNumber = [];
  const stringNumber = n.toString();

  for (let i = 0; i < stringNumber.length; i++) {
    arrayNumber.push(stringNumber[i]);
  }

  const reverseNumber = +arrayNumber.reverse().join('');

  if (reverseNumber === n) return true;

  return false;
}

console.log(isSymetricNumber(10));
console.log(isSymetricNumber(11));
console.log(isSymetricNumber(12321));
