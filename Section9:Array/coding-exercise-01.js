// 1. Print number : 1 -> 10
// 2. Print even number [2,4,6,8]
// 3. Print even number but less than n

// 1. Print number : 1 -> 10
function printNumbers() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}
printNumbers();

// 2. Print even number [2,4,6,8]
function printEvenNumbersV1() {
  for (let i = 2; i < 10; i += 2) {
    console.log(i);
  }
}
printEvenNumbersV1();

// 3. Print even number but less than n
function printEvenNumberV2(n) {
  if (n < 2) return;
  for (let i = 2; i < n; i += 2) {
    console.log(i);
  }
}
printEvenNumberV2(20);
