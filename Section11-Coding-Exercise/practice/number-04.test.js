// Kiểm tra số nguyên tố
// Viết hàm isPrime(n) để kiểm tra n có phải là số nguyên tố không ?
// - Số nguyên tố là số chỉ chia hết cho 1 và chính nó
// - 0 < n < 100000
// Trả về true nếu là số nguyên tố ngược lại trả về false

// isPrime(3) --> true
// isPrime(4) --> false
// isPrime(11) --> true

import {isPrime} from './number-04'

describe('isPrime(n) ', () => {
  test('should return false when 0 < n < 100000', () => {
    expect(isPrime(-1) ).toBe(false);
    expect(isPrime(0) ).toBe(false);
    expect(isPrime(100000) ).toBe(false);
    expect(isPrime(100001) ).toBe(false);
  })

  test('should return false when n < 2', () => {
    expect(isPrime(1) ).toBe(false);
  })

  test('should return true when n is a Prime Number', () => {
    expect(isPrime(2) ).toBe(true);
    expect(isPrime(3) ).toBe(true);
    expect(isPrime(5) ).toBe(true);
    expect(isPrime(7) ).toBe(true);
    expect(isPrime(11) ).toBe(true);
  })
})
