// Kiểm tra có giá trị falsy nào trong mảng không 
// Viết hàm hasFalsy(arr) để kiểm tra xem trong mảng arr có giá trị falsy không ?
import { hasFalsy } from "./array-check-05";

describe('hasFalsy(arr)', () => {
  test('should return false when arry is empty or not array', () => {
    expect(hasFalsy()).toBe(false);
    expect(hasFalsy([])).toBe(false);
    expect(hasFalsy({})).toBe(false);
    expect(hasFalsy('test')).toBe(false);
  })

  test('should return false when arr havent falsy value', () => {
    expect(hasFalsy(['easy', 123, {id:1, name: 'test'}])).toBe(false);
  })
  
  test('should return true when arr have falsy value', () => {
    expect(hasFalsy([null, 123])).toBe(true);
    expect(hasFalsy([false, 'test'])).toBe(true);
    expect(hasFalsy([123, ''])).toBe(true);
    expect(hasFalsy([undefined, 'test'])).toBe(true);
    expect(hasFalsy([123, NaN])).toBe(true);
  })
  
  
})
