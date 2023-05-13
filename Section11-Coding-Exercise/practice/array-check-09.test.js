// Kiểm tra mảng có tăng dần không
// Viết hàm isIncreaseingNumberList(numberList) để kiểm tra xem mảng số này có phải tăng dần không
// Mảng tăng dần có điều kiện sau :
// - Có ít nhất 2 phần tử
// - Phần tử sau luôn lớn hơn phần tử trước nó
import { isIncreaseingNumberList } from './array-check-09';
describe('isIncreaseingNumberList(numberList)', () => {
  test('should return false when numberList is not array or empty', () => {
    expect(isIncreaseingNumberList([])).toBe(false);
    expect(isIncreaseingNumberList({})).toBe(false);
    expect(isIncreaseingNumberList('')).toBe(false);
    expect(isIncreaseingNumberList(123)).toBe(false);
  });

  test('should return false when value of numberList is not a number', () => {
    expect(isIncreaseingNumberList([1, 2, 3, 'test'])).toBe(false);
    expect(isIncreaseingNumberList(['hello', 'world', 'test'])).toBe(false);
  });

  test('should return false when numberList is not Increasing NumberList', () => {
    expect(isIncreaseingNumberList([1, 2, 3, 1, 5, 6, 9])).toBe(false);
  });

  test('should return true when numberList is Increasing NumberList', () => {
    expect(isIncreaseingNumberList([1, 2])).toBe(true);
    expect(isIncreaseingNumberList([1, 2, 3, 4, 5, 6, 7])).toBe(true);
    expect(isIncreaseingNumberList([11, 13, 15, 26, 27])).toBe(true);
  });
});
