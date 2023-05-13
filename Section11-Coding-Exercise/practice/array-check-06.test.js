// Kiểm tra có student có id nào đó trong mảng không 
// Viết hàm hasStudent(studentList, studentId) để kiểm tra trong mảng studentList có student nào có Id là studentId không ?
import { hasStudent } from "./array-check-06";

describe('hasStudent(studentList, studentId)', () => {
  test('should return false when studentList is empty', () => {
    expect(hasStudent([], 1)).toBe(false);
    expect(hasStudent({}, 1)).toBe(false);
    expect(hasStudent('test', 1)).toBe(false);
    expect(hasStudent(123, 1)).toBe(false);
  })

  test('should return false when studentList havent student with studentId', () => {
    const studentList = [
      {id: 1, name: 'Easy'},
      {id: 2, name: 'Frontend'}
    ]
    expect(hasStudent(studentList, 3)).toBe(false);
  })

  test('should return true when studentList have student with studentId', () => {
    const studentList = [
      {id: 1, name: 'Easy'},
      {id: 2, name: 'Frontend'}
    ]
    expect(hasStudent(studentList, 1)).toBe(true);
  })
  
})
