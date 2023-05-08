// Kiểm tra số tăng dần đều theo khoảng cách cho trước

// Viết hàm isIncreasingNumberByDistance(n,x) để kiểm tra n có phải là số tăng dần đều với khoảng cách giữa 2 chữ số là x không ?
// - 0 < n < 1000000, 0 < x < 5
// - Số tăng dần có ít nhất 2 chữ số
// - Chữ số bên phải luôn lớn hơn chữ số bên trái
// - Khoảng cách của 2 chữ số liền kề là x

// Trả về true nếu là số tăng dần đều theo khoảng cách x, ngược lại trả về false

// isIncreasingNumberByDistance(11,1) --> false
// isIncreasingNumberByDistance(123,1) --> true
// isIncreasingNumberByDistance(135,2) --> true
// isIncreasingNumberByDistance(135,1) --> false
import {isIncreasingNumberByDistance} from './number-03'

describe('isIncreasingNumberByDistance(n,x)', () => {
  test('should return false when 0 < n < 1000000', () => {
    expect(isIncreasingNumberByDistance(0, 1)).toBe(false);
    expect(isIncreasingNumberByDistance(-1, 1)).toBe(false);
    expect(isIncreasingNumberByDistance(1000000, 1)).toBe(false);
  });

  test('should return false when 0 < x < 5', () => {
    expect(isIncreasingNumberByDistance(123, 0)).toBe(false);
    expect(isIncreasingNumberByDistance(123, -1)).toBe(false);
    expect(isIncreasingNumberByDistance(123, 6)).toBe(false);
    expect(isIncreasingNumberByDistance(123, 7)).toBe(false);
    expect(isIncreasingNumberByDistance(123, 8)).toBe(false);
    expect(isIncreasingNumberByDistance(123, 9)).toBe(false);
  });

  test('should return false when n < 10', () => {
    expect((isIncreasingNumberByDistance(1, 1))).toBe(false);
    expect((isIncreasingNumberByDistance(2, 1))).toBe(false);
    expect((isIncreasingNumberByDistance(3, 1))).toBe(false);
    expect((isIncreasingNumberByDistance(4, 1))).toBe(false);
    expect((isIncreasingNumberByDistance(5, 1))).toBe(false);
    expect((isIncreasingNumberByDistance(6, 1))).toBe(false);
    expect((isIncreasingNumberByDistance(7, 1))).toBe(false);
    expect((isIncreasingNumberByDistance(8, 1))).toBe(false);
    expect((isIncreasingNumberByDistance(9, 1))).toBe(false);
  })
  
  test('should return false when n not an Increasing Number ByDistance', () => {
    expect(isIncreasingNumberByDistance(125, 1)).toBe(false);
    expect(isIncreasingNumberByDistance(58, 2)).toBe(false);
    expect(isIncreasingNumberByDistance(479, 3)).toBe(false);
    expect(isIncreasingNumberByDistance(246, 1)).toBe(false);
    expect(isIncreasingNumberByDistance(13579, 1)).toBe(false);
    expect(isIncreasingNumberByDistance(123456, 2)).toBe(false);
  });

  test('should return true when n an Increasing Number ByDistance', () => {
    expect(isIncreasingNumberByDistance(123, 1)).toBe(true);
    expect(isIncreasingNumberByDistance(246, 2)).toBe(true);
    expect(isIncreasingNumberByDistance(13579, 2)).toBe(true);
    expect(isIncreasingNumberByDistance(2468, 2)).toBe(true);
    expect(isIncreasingNumberByDistance(159, 4)).toBe(true);
    expect(isIncreasingNumberByDistance(258, 3)).toBe(true);
  });

});
