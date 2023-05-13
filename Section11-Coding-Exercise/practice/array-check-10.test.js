// Kiểm tra mảng có giảm dần không
// Viết hàm isIncreaseingNumberList(numberList) để kiểm tra xem mảng số này có phải giảm dần không
// Mảng giảm dần có điều kiện sau :
// - Có ít nhất 2 phần tử
// - Phần tử sau luôn nhỏ hơn phần tử trước nó
import { isIncreaseingNumberList } from "./array-check-10";
describe('isIncreaseingNumberList(numberList)', () => {
  test('should return false when numberList is not array or empty', () => {
    expect(isIncreaseingNumberList([])).toBe(false);
    expect(isIncreaseingNumberList({})).toBe(false);
    expect(isIncreaseingNumberList('test')).toBe(false);
    expect(isIncreaseingNumberList(123)).toBe(false);
  });

  test('should return false when numberList have value not a number', () => {
    expect(isIncreaseingNumberList([1, 2, 3, 'test'])).toBe(false);
    expect(isIncreaseingNumberList(['hello', 'world', 'test'])).toBe(false);
  });

  test('should return false when numberList is not IncreaseNumberList', () => {
    expect(isIncreaseingNumberList([1, 2, 3, 2, 1])).toBe(false);
  });

  test('should return true when numberList is IncreaseNumberList', () => {
    expect(isIncreaseingNumberList([6, 5, 4, 3, 2, 1])).toBe(true);
    expect(isIncreaseingNumberList([98, 76, 54, 43, 32, 21, 11])).toBe(true);
  });
});
