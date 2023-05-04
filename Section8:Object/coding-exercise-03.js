// Kiểm tra 2 objects có bằng nhau không?
// Viết hàm isEqual(obj1, obj2) nhận vào 2 objects và trả về:
// true nếu số lượng keys của 2 objects bằng nhau, và giá trị của từng key cũng bằng nhau (dùng === để so sánh)
// ngược lại là false

// Ví dụ:
// isEqual({}, {}) --> true
// isEqual({ name: 'Bob' }, { name: 'Alice' }) --> false
// isEqual({ name: 'Bob' }, { name: 'Bob' }) --> true
// isEqual({ name: 'Bob' }, { name: 'Bob', age: 18 }) --> false

// Giả sử kiểu dữ liệu của các thuộc tính của cả 2 objects đều là kiểu dữ liệu primitive.

function isEqual(obj1, obj2) {
  const isLength = Object.keys(obj1).length === Object.keys(obj2).length;

  const comparisonValue = obj1.value === obj2.value;

  if (isLength && comparisonValue) return true;

  return false;
}
console.log(isEqual({}, {})); //--> true
console.log(isEqual({ name: 'Bob' }, { name: 'Alice' })); //--> false
console.log(isEqual({ name: 'Bob', age: 10 }, { name: 'Bob', age: 10 })); // --> true
console.log(isEqual({ name: 'Bob' }, { name: 'Bob', age: 18 })); // --> false
