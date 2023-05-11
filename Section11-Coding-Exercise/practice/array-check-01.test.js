// Kiểm tra có số chắn lớn hơn n trong mảng không ?
// Viết hàm hasEvenNumberGreaterThanNumber(numberList, n) để kiểm tra trong mảng số NumberList truyền vào có số chẵn mà lớn hơn n hay không ?
import { hasEvenNumberGreaterThanNumber } from "./array-check-01";

describe('hasEvenNumberGreaterThanNumber(numberList, n)', () => {
  it('should return false when numberList is empty', () => {
    const numberList = [];
    expect(hasEvenNumberGreaterThanNumber(numberList, 10)).toBe(false);
  });

  it('should return false when number in numberList is not greater than n number', () => {
    const numberList = [1, 2, 3, 4, 5];
    expect(hasEvenNumberGreaterThanNumber(numberList, 10)).toBe(false);
  });

  it('should return false when havent even number in numberList is not greater than n number', () => {
    const numberList = [1, 2, 3, 4, 15, 17, 19];
    expect(hasEvenNumberGreaterThanNumber(numberList, 10)).toBe(false);
  });

  it('should return true when have even number in numberList is greater than n number', () => {
    const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    expect(hasEvenNumberGreaterThanNumber(numberList, 10)).toBe(true);
  });
});
