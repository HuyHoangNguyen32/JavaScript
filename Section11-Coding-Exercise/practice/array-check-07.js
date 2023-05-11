// for...i
// forEach
// find
// findIndex
// filter

// Example 1 : for...i
// export function hasAlice(studentList) {
//   if (!Array.isArray(studentList) || studentList.length === 0) return false;

//   for (let i = 0; i < studentList.length; i++) {
//     if (studentList[i].name.toLowerCase() === 'alice' && studentList[i].gender === 'female')
//       return true;
//   }

//   return false;
// }

/* ################################## */

// Example 2 : for...i

// function isAlice(student) {
//   if (!student) return false;

//   return student.name.toLowerCase() === 'alice' && student.gender === 'female';
// }

// export function hasAlice(studentList) {
//   if (!Array.isArray(studentList) || studentList.length === 0) return false;

//   for (let i = 0; i < studentList.length; i++) {
//     const student = studentList[i];
//     if (isAlice(student)) return true;
//   }

//   return false;
// }

/* ################################## */

// Example 3 : forEach

// function isAlice(student) {
//   if (!student) return false;

//   return student.name.toLowerCase() === 'alice' && student.gender === 'female';
// }

// export function hasAlice(studentList) {
//   if (!Array.isArray(studentList) || studentList.length === 0) return false;

//   let hasAliceFlag = false;

//   studentList.forEach((student) => {
//     // console.log(student)
//     if (isAlice(student)) {
//       // console.log('found Alice ')
//       hasAliceFlag = true;
//     }
//   });

//   return hasAliceFlag;
// }

/* ################################## */

// Example 4 : find

// function isAlice(student) {
//   if (!student) return false;

//   return student.name.toLowerCase() === 'alice' && student.gender === 'female';
// }
// export function hasAlice(studentList) {
//   if (!Array.isArray(studentList) || studentList.length === 0) return false;
//   // return !!studentList.find((student) => isAlice(student));
//   // return Boolean(studentList.find((student) => isAlice(student)));
//   return Boolean(studentList.find(isAlice));
// }

// const studentList = [
//   { id: 1, name: 'Alice', gender: 'male' },
//   { id: 2, name: 'alicE', gender: 'female' },
//   { id: 3, name: 'Easy Frontend', gender: 'male' },
// ];

// console.log(hasAlice(studentList));


/* ################################## */

// Example 5 : findIndex => RECOMMENED

function isAlice(student) {
  if (!student) return false;

  return student.name.toLowerCase() === 'alice' && student.gender === 'female';
}

export function hasAlice(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return false;
  return studentList.findIndex(isAlice) >= 0;
}

const studentList = [
  { id: 1, name: 'Alice', gender: 'male' },
  { id: 2, name: 'alicE', gender: 'female' },
  { id: 3, name: 'Easy Frontend', gender: 'male' },
];

console.log(hasAlice(studentList));


/* ################################## */

// Example 6 : filter

// function isAlice(student) {
//   if (!student) return false;

//   return student.name.toLowerCase() === 'alice' && student.gender === 'female';
// }
// export function hasAlice(studentList) {
//   if (!Array.isArray(studentList) || studentList.length === 0) return false;

//   return studentList.filter(isAlice).length > 0;
// }

// const studentList = [
//   { id: 1, name: 'Alice', gender: 'male' },
//   { id: 2, name: 'alicE', gender: 'female' },
//   { id: 3, name: 'Easy Frontend', gender: 'male' },
// ];

// console.log(hasAlice(studentList));