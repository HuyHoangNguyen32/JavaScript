// for...i
// export function hasStudent(studentList, studentId) {
//   if (!Array.isArray(studentList) || studentList.length === 0) return false;

//   for (let i = 0; i < studentList.length; i++) {
//     if (studentList[i].id === studentId) return true;
//   }

//   return false;
// }


/* ##################################### */
// forEach
// export function hasStudent(studentList, studentId) {
//   if (!Array.isArray(studentList) || studentList.length === 0) return false;

//   let isStudentId = false;
//   studentList.forEach((student) => {
//     if (student.id === studentId) isStudentId = true;
//   });

//   return isStudentId;
// }

// const studentList = [
//   { id: 1, name: 'Easy' },
//   { id: 2, name: 'Frontend' },
// ];

// console.log(hasStudent(studentList, 3));


/* ##################################### */
// find
// function isStudentId(student, id) {
//   return student.id === id;
// }

// export function hasStudent(studentList, studentId) {
//   if (!Array.isArray(studentList) || studentList.length === 0) return false;

//   const result = Boolean(studentList.find((student) => isStudentId(student, studentId)));

//   return result;
// }

// const studentList = [
//   { id: 1, name: 'Easy' },
//   { id: 2, name: 'Frontend' },
// ];

// console.log(hasStudent(studentList, 1));


/* ##################################### */
// findIndex
function isStudentId(student, id) {
  return student.id === id;
}

export function hasStudent(studentList, studentId) {
  if (!Array.isArray(studentList) || studentList.length === 0) return false;

  const result = studentList.findIndex((student) => isStudentId(student, studentId)) > -1;

  return result;
}

const studentList = [
  { id: 1, name: 'Easy' },
  { id: 2, name: 'Frontend' },
];

console.log(hasStudent(studentList, 2));
