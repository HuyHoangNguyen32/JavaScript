// 1. Get the ones of a number having 3 digits
function extractTheOnes(n) {
  if (n.toString().length !== 3) return -1;

  return n % 10;
}

console.log(extractTheOnes(123));
console.log(extractTheOnes(1234));

// 2. Get the tens of a number having 3 digits
function extractTheTens(n) {
  if (n.toString().length !== 3) return -1;

  return Math.trunc((n % 100) / 10);
}

console.log(extractTheTens(459));

// 3. Get the hundreds of a number having 3 digits
function extractTheHundreds(n) {
  if (n.toString().length !== 3) return -1;

  return Math.trunc(n / 100);
}

console.log(extractTheHundreds(959));

// 4. Sum all digits of a number having 3 digits
function sumDigits(n) {
  if (n.toString().length !== 3) return -1;

  const hundreds = Math.trunc(n / 100);
  const tens = Math.trunc((n % 100) / 10);
  const ones = n % 10;

  const result = hundreds + tens + ones;

  return result;
}

console.log(sumDigits(456));
