// Kiểm tra số có tổng của 2 chữ số bằng số cho trước
// Viết hàm hasTwoDigitsWithSum(n, sum) để kiểm tra n (9<n<1000000) có chứa 2 chữ số bất kỳ nào có tổng bằng sum (0<sum<19) cho trước không
// hasTwoDigitsWithSum(10, 1) --> true vì 0 + 1 = 1
// hasTwoDigitsWithSum(101, 3) --> false
// hasTwoDigitsWithSum(11,2) --> true
import {hasTwoDigitsWithSum} from './number-09'

describe('hàm hasTwoDigitsWithSum(n, sum)', () => {
  test('should return false when n <= 9 or n >= 1000000', () => {
    expect(hasTwoDigitsWithSum(-1, 10)).toBe(false);
    expect(hasTwoDigitsWithSum(0, 10)).toBe(false);
    expect(hasTwoDigitsWithSum(9, 10)).toBe(false);
    expect(hasTwoDigitsWithSum(1000000, 10)).toBe(false);
    expect(hasTwoDigitsWithSum(1000001, 10)).toBe(false);
  })

  test('should return false when sum <= 0 or sum >= 19', () => {
    expect(hasTwoDigitsWithSum(100, -1)).toBe(false);
    expect(hasTwoDigitsWithSum(100, 0)).toBe(false);
    expect(hasTwoDigitsWithSum(199, 19)).toBe(false);
    expect(hasTwoDigitsWithSum(992, 20)).toBe(false);
  })

  test('should return false when n is not hasTwoDigitsWithSum', () => {
    expect(hasTwoDigitsWithSum(101,3)).toBe(false);
    expect(hasTwoDigitsWithSum(1234,9)).toBe(false);
    expect(hasTwoDigitsWithSum(4671, 19)).toBe(false);
  })

  test('should return true when n is hasTwoDigitsWithSum', () => {
    expect(hasTwoDigitsWithSum(10,1)).toBe(true);
    expect(hasTwoDigitsWithSum(11,2)).toBe(true);
    expect(hasTwoDigitsWithSum(1234,10)).toBe(true);
    expect(hasTwoDigitsWithSum(4614,15)).toBe(true);
    expect(hasTwoDigitsWithSum(46143,18)).toBe(true);
  })
  
})

