// Thống kê kí tự có trong câu
// Viết hàm statisticsCharacters(str) để thống kê số lượng ký tự có trong câu
// Trả về một Object với :
// - key là chracter có xuất hiện trong str.Nếu là khoảng trắng thì key = 'space'
// - value là số lần xuất hiện của key

import {statisticsCharacters} from './string-03'

describe('statisticsCharacters(str)', () => {
  test('should return empty object when str is empty', () => {
    expect(statisticsCharacters('')).toEqual({});
  });

  test('should return correct statistics when str has spaces ', () => {
    expect(statisticsCharacters('javascript')).toEqual({
      j: 1,
      a: 2,
      v: 1,
      s: 1,
      c: 1,
      r: 1,
      i: 1,
      p: 1,
      t: 1,
      spaces: 0
    });
  });
});
