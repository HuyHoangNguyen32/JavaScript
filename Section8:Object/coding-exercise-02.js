// Viết hàm clone object nhưng không dùng spread operator
// Viết hàm function cloneObject(obj) để clone một object obj truyền vào, và trả về là một object mới có đầy đủ các keys của object truyền vào.

// Ví dụ:

// const studentA = { name: 'Bob', math: 9 };
// const studentB = cloneObject(studentA);

// console.log(studentA === studentB); // should be false
// console.log(studentB.name); // Bob
// console.log(studentB.math); // 9

// Lưu ý: Không sử dụng Object.assign() và spread operator

// ! Cách 1 : 
const studentA = { name: 'Bob', math: 9 };

function cloneObject1(obj) {
  if (Object.keys(obj).length === 0) return -1;

  const newObj = { ...obj };

  return newObj;
}

const studentB = cloneObject1(studentA);
console.log(studentA === studentB); // should be false
console.log(studentB.name); // Bob
console.log(studentB.math); // 9

// ! Cách 2 : 
const studentC = { name: 'Bob', math: 9 };

function cloneObject2(obj) {
  if (Object.keys(obj).length === 0) return -1;

  const newObj = {};

  for (let key in obj) {
    newObj[key] = obj[key];
  }

  return newObj;
}
const studentD = cloneObject2(studentC);
console.log(studentC === studentD); // should be false
console.log(studentD.name); // Bob
console.log(studentD.math); // 9
