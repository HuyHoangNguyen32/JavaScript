// Kiểm tra số hoàn hảo
// Viết hàm isPerfectNumber(n) để kiểm tra n có phải số hoàn hảo hay không 
// - Với 1 < n < 1000
// - Số hoàn hảo là số mà tổng của tất cả ước số bằng chính nó
// 6 = 1 + 2 + 3 => 6 là số hoàn hảo

import {isPerfectNumber} from './number-06'

describe('isPerfectNumber(n)', () => {
  test('should return false if 1 < n < 1000', () => {
    expect(isPerfectNumber(0)).toBe(false);
    expect(isPerfectNumber(1)).toBe(false);
    expect(isPerfectNumber(1000)).toBe(false);
    expect(isPerfectNumber(1001)).toBe(false);
  })
  test('should return true if n is a Perfect Number', () => {
    expect(isPerfectNumber(6)).toBe(true);
    expect(isPerfectNumber(28)).toBe(true);
    expect(isPerfectNumber(496)).toBe(true);
    expect(isPerfectNumber(100)).toBe(false);
  })
  
  
})
