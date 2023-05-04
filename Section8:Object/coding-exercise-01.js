// 1. Create an object student with name is Easy Frontend and age is 18
const student1 = {};
student1.name = 'Easy Frontend';
student1.age = 18;
console.log(student1);

const student2 = {
  name: 'Easy Frontend',
  age: 18,
};
console.log(student2);

// 2. Check if an object is empty (means have no keys)
function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}
console.log(isEmpty({}));
console.log(isEmpty({ id: 1 }));

// 3. Get average mark of an object
function calcAvgMark(mark) {
  if (!mark) return -1;

  const length = Object.keys(mark).length;
  let sum = 0;

  for (const key in mark) {
    sum += mark[key];
  }

  const average = (sum / length).toFixed(1);

  return average;
}

const studentScore = {
  math: 6,
  english: 6,
  history: 8,
};

console.log(calcAvgMark(studentScore));
