// Kiểm tra có giá trị truthy nào trong mảng không
// Viết hàm hasTruthy(arr) để kiểm tra xem trong mảng arr có giá trị truthy không ?
import { hasTruthy } from "./array-check-04";

describe('hasTruthy(arr)', () => {
  test('should return false when arr is empty', () => {
    expect(hasTruthy()).toBe(false);
    expect(hasTruthy([])).toBe(false);
    expect(hasTruthy({})).toBe(false);
  });

  test('should return false when in arr have falsy value', () => {
    expect(hasTruthy([false, ''])).toBe(false);
  });

  test('should return true when in arr have truthy value', () => {
    expect(hasTruthy([123, 'hello', '', false])).toBe(true);
    expect(hasTruthy([{ id: 1, name: 'hoang' }, [1, 2, 3, 4]])).toBe(true);
  });
});
