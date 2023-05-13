// Kiểm tra mảng có số fibonacci nhỏ hơn 100 không ?
// Viết hàm hasfibonacciNumber(numberList) để kiểm tra xem trong mảng numberList có chứa một số fibonacci nhỏ hơn 100 không ?
// - Viết hàm để generate list fibonacci numbers nhỏ hơn 100
// - Kiểm tra trong mảng đầu vào có chứa con số fibonacci nhỏ hơn 100 không ? Trả về true nếu có và ngược lại trả về false
import { hasfibonacciNumber } from "./array-check-12";
describe('hasfibonacciNumber(numberList)', () => {
  test('should return false when numberList is empty or not a array', () => {
    expect(hasfibonacciNumber([])).toBe(false);
    expect(hasfibonacciNumber({})).toBe(false);
    expect(hasfibonacciNumber(123)).toBe(false);
    expect(hasfibonacciNumber('test')).toBe(false);
  });

  test('should return false when numberList have value not a number', () => {
    expect(hasfibonacciNumber([1, 2, 3, 4, 5, 'test'])).toBe(false);
    expect(hasfibonacciNumber(['hello', 'world'])).toBe(false);
  });

  test('should return false when numberList havent fibonacci number', () => {
    expect(hasfibonacciNumber([4, 6, 7, 9, 10, 11])).toBe(false);
  });

  test('should return true when numberList have fibonacci number', () => {
    expect(hasfibonacciNumber([1, 2, 3, 4, 5, 8])).toBe(true);
    expect(hasfibonacciNumber([4, 6, 7, 21, 34, 11])).toBe(true);
  });
});
