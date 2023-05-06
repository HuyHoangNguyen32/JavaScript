// Kiểm tra số tăng dần
// Viết hàm isIncreasingNumber(n) để kiểm tra n có phải là số tăng dần hay không ?
// - 0 < n < 1000000
// - Số tăng dần là số có ít nhất 2 chữ số
// - Chữ số bên phải luôn lớn hơn chữ cố bên trái
// Trả về true nếu là số tăng dần và ngược lại trả về false

// isIncreasingNumber(11) --> false
// isIncreasingNumber(123) --> true
// isIncreasingNumber(12321) --> false

// ! #####################################
// Solution 1
// n = 123
// n % 10 = last digit = 3
// n / 10 = 12.3 --> Math.trunc(12.3) --> 12
// Math.trunc(n /10) --> remove the last digit

// P1 : extract all digits and compare from right to left
// P2 : convert to string and compare

// export function isIncreasingNumber(n) {
//   if (n <= 0 || n > 1000000) return false;

//   if (n < 10) return false;

//   let remaining = n; //123
//   let prevDegit = 10;

//   while (remaining > 0) {
//     // if found an invalid case return false
//     const lastDigit = remaining % 10;
//     if (lastDigit >= prevDegit) return false;

//     // update prevDigit to lastDigit
//     prevDegit = lastDigit; //3

//     //remove the last digit from remaining
//     remaining = Math.trunc(remaining / 10);
//   }

//   return true;
// }

// ! #####################################
// Solution 2
export function isIncreasingNumber(n) {
  if (n <= 0 || n > 1000000) return false;

  if (n < 10) return false;

  const numberString = n.toString();
  for (let i = 1; i < numberString.length; i++) {
    if (numberString[i] <= numberString[i - 1]) return false;
  }

  return true;
}
