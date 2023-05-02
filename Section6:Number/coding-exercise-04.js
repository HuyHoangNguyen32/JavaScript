// Kiểm tra số có tối đa 3 chữ số có phải là số đối xứng hay không?
// Viết hàm isSymmetricNumber(n) để nhận vào số nguyên dương n có tối đa 3 chữ số và trả về true nếu n là số đối xứng, ngược lại trả về false.
// Giả sử tham số n truyền vào luôn luôn là số có tối đa 3 chữ số. (0 --> 999)
// Số đối xứng là số mà đọc từ trái sang phải nó giống như đọc từ phải sang trái.

// Ví dụ: 1, 22, 33, 121, 222, 353, 373, ...
// Lưu ý: không dùng chuỗi, không dùng mảng, chỉ xử lý bằng số thôi nhé.

function isSymmetricNumber(n) {
  if (n < 0 || n > 1000) return false;

  if (n.toString().length === 1) return true;

  const ones = Math.trunc(n % 10);
  const tens = Math.trunc(n / 10);
  const hundreds = Math.trunc(n / 100);

  if (n.toString().length === 2) return ones === tens ? true : false;

  if (ones === hundreds) return true;

  return false;
}

console.log(isSymmetricNumber(1));
console.log(isSymmetricNumber(33));
console.log(isSymmetricNumber(32));
console.log(isSymmetricNumber(323));
console.log(isSymmetricNumber(678));
console.log(isSymmetricNumber(6783));

//

function isSymmetricNumber(n) {
  // your code here

  if (n < 0 || n > 1000) return false;

  if (n.toString().length === 2) return Math.trunc(n / 10) === n % 10 ? true : false;

  if (n.toString().length === 3) {
    const onesNumber = n % 10;

    const hundredsNumber = Math.trunc(n / 100);

    return onesNumber === hundredsNumber ? true : false;
  }

  return true;
}
console.log(isSymmetricNumber(1));
console.log(isSymmetricNumber(33));
console.log(isSymmetricNumber(323));
console.log(isSymmetricNumber(678));
console.log(isSymmetricNumber(6783));
