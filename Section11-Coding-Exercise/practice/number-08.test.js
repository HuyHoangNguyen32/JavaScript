// Kiểm tra số có tổng chữ số chia hết cho 10
// Viết hàm isDivisibleBy10(n) để kiểm tra n (0<n<1000000) có tổng chữ số chia hết cho 10 hay không
// isDivisibleBy10(10) --> false
// isDivisibleBy10(1234) --> true 1 + 2 + 3 + 4 = 10
// isDivisibleBy10(123455) --> true 1 + 2 + 3 + 4 + 5 + 5 = 20
import { isDivisibleBy10} from './number-08'
describe('isDivisibleBy10(n)', () => {
  test('should return false when n <= 0 or n >= 1000000', () => {
    expect(isDivisibleBy10(-1)).toBe(false);
    expect(isDivisibleBy10(0)).toBe(false);
    expect(isDivisibleBy10(1000000)).toBe(false);
    expect(isDivisibleBy10(1000001)).toBe(false);
  })

  test('should return false when n is not a Number Divisible By 10', () => {
    expect(isDivisibleBy10(10)).toBe(false);
    expect(isDivisibleBy10(354)).toBe(false);
    expect(isDivisibleBy10(4444)).toBe(false);
    expect(isDivisibleBy10(89190)).toBe(false);
  })

  test('should return true when n is a Number Divisible By 10', () => {
    expect(isDivisibleBy10(1234)).toBe(true);
    expect(isDivisibleBy10(123455)).toBe(true);
    expect(isDivisibleBy10(82910)).toBe(true);
  })
  
})

