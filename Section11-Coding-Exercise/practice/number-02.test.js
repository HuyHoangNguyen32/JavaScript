// Kiểm tra số giảm dần
// Viết hàm isDecreasingNumber(n) để kiểm tra n có phải là số giảm dần hay không ?
// - 0 < n < 1000000
// - Số giảm dần có ít nhất 2 chữ số
// - Chữ số bên phải luôn nhỏ hơn chữ số bên trái
// Trả về true nếu là số giảm dần ngược lại trả về false

// isDecreasingNumber(11) --> false
// isDecreasingNumber(321) --> false
// isDecreasingNumber(12332) --> false
import { isDecreasingNumber } from './number-02';

describe('isDecreasingNumber(n)', () => {
  test('should return -1 if n < 0 or n > 1000000', () => {
    expect(isDecreasingNumber(0)).toBe(false);
    expect(isDecreasingNumber(-1)).toBe(false);
    expect(isDecreasingNumber(1000001)).toBe(false);
  });

  test('should return false when n < 10', () => {
    // expect(isIncreasingNumber(0)).toBe(false);
    // expect(isIncreasingNumber(1)).toBe(false);
    // expect(isIncreasingNumber(2)).toBe(false);
    // ...~ 9
    Array.from({ length: 10 }, (x, idx) => idx).forEach((x) => {
      expect(isDecreasingNumber(x)).toBe(false);
    });
  });

  test('should return when n is not an Decreasing Number', () => {
    expect(isDecreasingNumber(123)).toBe(false);
    expect(isDecreasingNumber(9178)).toBe(false);
    expect(isDecreasingNumber(55555)).toBe(false);
    expect(isDecreasingNumber(664499)).toBe(false);
  });

  test('should return true when n is an Decreasing Number', () => {
    expect(isDecreasingNumber(321)).toBe(true);
    expect(isDecreasingNumber(98765)).toBe(true);
    expect(isDecreasingNumber(86420)).toBe(true);
    expect(isDecreasingNumber(97531)).toBe(true);
  });
});
