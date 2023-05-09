// Kiểm tra số đối xứng
// Viết hầm isSymetricNumber(n) để kiểm tra n có phải số đối xứng hay không
// - Với n thoả điều kiện 1 < n < 1000000
// - Số đối xứng là số đọc từ trái sang phải cũng giống như đọc từ phải sang trái
// - Trả về true nếu đúng và ngược lại trả về false
// isSymetricNumber(10) --> false
// isSymetricNumber(11) -->  true
// isSymetricNumber(12321) -->  true
import { isSymetricNumber } from './number-07'

describe('isSymetricNumber(n)', () => {
  test('should return false when n <= 1 or n>=1000000 ', () => {
    expect(isSymetricNumber(-1)).toBe(false);
    expect(isSymetricNumber(0)).toBe(false);
    expect(isSymetricNumber(1)).toBe(false);
    expect(isSymetricNumber(1000000)).toBe(false);
    expect(isSymetricNumber(1000001)).toBe(false);
  })

  test('should return false when n is not a Symetric Number', () => {
    expect(isSymetricNumber(123)).toBe(false);
    expect(isSymetricNumber(65470)).toBe(false);
    expect(isSymetricNumber(456765)).toBe(false);
    expect(isSymetricNumber(7778)).toBe(false);
  })

  test('should return true when n is a Symetric Number', () => {
    expect(isSymetricNumber(11)).toBe(true);
    expect(isSymetricNumber(777)).toBe(true);
    expect(isSymetricNumber(12321)).toBe(true);
    expect(isSymetricNumber(67876)).toBe(true);
  })
})

