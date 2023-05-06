// Kiểm tra số tăng dần
// Viết hàm isIncreasingNumber(n) để kiểm tra n có phải là số tăng dần hay không ?
// - 0 < n < 1000000
// - Số tăng dần là số có ít nhất 2 chữ số
// - Chữ số bên phải luôn lớn hơn chữ cố bên trái
// Trả về true nếu là số tăng dần và ngược lại trả về false

// isIncreasingNumber(11) --> false
// isIncreasingNumber(123) --> true
// isIncreasingNumber(12321) --> false

import { isIncreasingNumber } from './number-01';

describe('isIncreasingNumber(n)', () => {
  it('should return -1 if n < 0 or n > 1000000', () => {
    expect(isIncreasingNumber(0)).toBe(false);
    expect(isIncreasingNumber(-1)).toBe(false);
    expect(isIncreasingNumber(1000001)).toBe(false);
  });

  it('should return false when n < 10', () => {
    // expect(isIncreasingNumber(0)).toBe(false);
    // expect(isIncreasingNumber(1)).toBe(false);
    // expect(isIncreasingNumber(2)).toBe(false);
    // ...~ 9
    Array.from({ length: 10 }, (x, idx) => idx).forEach((x) => {
      expect(isIncreasingNumber(x)).toBe(false);
    });
  });

  it('should return false when n is not an increasing number', () => {
    [11, 222, 333, 4444, 55555, 666666, 21, 312, 7831, 76872, 121212].forEach((x) => {
      expect(isIncreasingNumber(x)).toBe(false);
    });
  });

  it('should return true when n is an increasing number', () => {
    [12, 123, 1234, 34568, 246789].forEach((x) => {
      expect(isIncreasingNumber(x)).toBe(true);
    });
  });
});
