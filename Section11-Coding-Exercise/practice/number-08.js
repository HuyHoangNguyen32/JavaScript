
export function isDivisibleBy10(n) {
  if (n <= 0 || n >= 1000000) return false;

  const stringNumber = n.toString();
  let sum  = 0;

  for (let i = 0; i < stringNumber.length; i++) {
    let value = Number.parseInt(stringNumber[i]);
    sum += value;
  }
  
  if (sum % 10 === 0) return true;

  return false;

}

console.log(isDivisibleBy10(10))
console.log(isDivisibleBy10(1234))
console.log(isDivisibleBy10(123455))