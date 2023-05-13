// Kiểm tra mảng có đối xứng không
// Viết hàm isSymmetricList(numberList) để kiểm tra mảng có tính chất đối xứng không ?
// - Mảng đối xứng là mảng đọc từ trái qua phải cũng giống như đọc từ phải sang trái
// - Mảng đối xứng phải có ít nhất một phần tử
import { isSymmetricList } from './array-check-11';
describe('isSymmetricList(numberList)', () => {
  test('should return false when numberList is empty or not a array', () => {
    expect(isSymmetricList([])).toBe(false);
    expect(isSymmetricList({})).toBe(false);
    expect(isSymmetricList('123')).toBe(false);
  });

  test('should return false when value of NumberList is not a number', () => {
    expect(isSymmetricList(['hello', 'world'])).toBe(false);
    expect(isSymmetricList([1, 2, 3, 4, 'test'])).toBe(false);
  });

  test('should return false when numberList is not SymmetricList', () => {
    expect(isSymmetricList([1, 2, 3, 4, 5, 6])).toBe(false);
  });

  test('should return true when numberList is not SymmetricList', () => {
    expect(isSymmetricList([1, 2, 3, 4, 3, 2, 1])).toBe(true);
  });
});
