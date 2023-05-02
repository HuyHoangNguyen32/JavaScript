// So sánh 2 số nguyên
// Viết hàm compareNumbers(a, b) nhận vào 2 số nguyên a, b bất kỳ.

// Trả về:
// 1 nếu a > b
// 0 nếu a = b
// -1 nếu a < b

// Ví dụ:
// compareNumbers(3, 5) --> -1
// compareNumbers(9, 7) --> 1
// compareNumbers(7, 7) --> 0

function compareNumbers(a, b) {
  if (a < 0 || b < 0) return;

  if (a < b) return -1;
  if (a > b) return 1;
  if ((a = b)) return 0;
}
console.log(compareNumbers(3, 5));
console.log(compareNumbers(9, 7));
console.log(compareNumbers(7, 7));