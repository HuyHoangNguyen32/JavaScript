// Lấy kí tự tại vị trí index
// Cách 1 :
console.log('Easy Frontend'.charAt(0)); // E
console.log('Easy Frontend'.charAt(3)); // y
const text = 'Easy Frontend';
console.log(text.charAt(text.length - 1)); // d

// Cách 2 :
console.log('Easy Frontend'[0]); // E
console.log('Easy Frontend'[3]); // y
console.log(text[text.length - 1]); // d

/* ############################################ */
// Nối chuỗi
const a = 'Easy';
const b = 'Frontend';
// Cách 1 : không nên dùng
const c = a + ' ' + b;
// Cách 2 : hạn chế dùng
const d = a.concat(' ', b);
// Cách 3 : dùng trong thực tế
const e = `${a} ${b}`;

/* ############################################ */
// Duyệt chuỗi
const text1 = 'Easy Frontend';
for (let i = 0; i < text1.length; i++) {
  console.log(text1[i]);
}

/* ############################################ */
// Chuyển đổi hoa thường
console.log('Easy Frontend'.toLocaleLowerCase());
console.log('Easy Frontend'.toLocaleUpperCase());

/* ############################################ */
// Tìm kiếm chuỗi con
const text2 = 'Hello Hoang';
console.log(text2.indexOf('o')); // 4
console.log(text2.lastIndexOf('o')); // 7

/* ############################################ */
// Kiểm tra chứa chuỗi con
const text3 = 'Hello Hoang Minh';

console.log(text3.startsWith('hello')); // false
console.log(text3.startsWith('Hello')); // true

console.log(text3.includes('hello')); // false
console.log(text3.includes('Hello')); // true
console.log(text3.includes('hoang')); // false
console.log(text3.includes('Hoang')); // true

console.log(text3.endsWith('Hoang')); // false
console.log(text3.endsWith('Minh')); // true
