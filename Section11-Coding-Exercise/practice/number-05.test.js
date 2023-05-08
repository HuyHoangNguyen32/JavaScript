// Kiểm tra số chính phương
// Viết hàm isPrefectSquare(n) để kiểm tra n có phải là số chính phương hay không ?
// - 0 < n 100000
// - Số chính phương là số có căn bậc hai của nó là một số tự nhiên
// - Trả về true nếu là số chính phương ngược lại trả về false
// 4,9,25,36 là số chính phương

import { isPrefectSquare } from './number-05';

describe('isPrefectSquare(n) ', () => {
  test('should return false when 0 < n 100000', () => {
    expect(isPrefectSquare(0)).toBe(false);
    expect(isPrefectSquare(-1)).toBe(false);
    expect(isPrefectSquare(100000)).toBe(false);
    expect(isPrefectSquare(100001)).toBe(false);
  });

  test('should return false when n is not a Prefect Number', () => {
    expect(isPrefectSquare(12)).toBe(false);
    expect(isPrefectSquare(13)).toBe(false);
    expect(isPrefectSquare(27)).toBe(false);
    expect(isPrefectSquare(38)).toBe(false);
    expect(isPrefectSquare(23)).toBe(false);
    expect(isPrefectSquare(32)).toBe(false);
    expect(isPrefectSquare(78)).toBe(false);
    expect(isPrefectSquare(87)).toBe(false);
    expect(isPrefectSquare(37)).toBe(false);
    expect(isPrefectSquare(73)).toBe(false);
  });

  test('should return true when n is a Prefect Number', () => {
    expect(isPrefectSquare(4)).toBe(true);
    expect(isPrefectSquare(9)).toBe(true);
    expect(isPrefectSquare(25)).toBe(true);
    expect(isPrefectSquare(36)).toBe(true);
    expect(isPrefectSquare(49)).toBe(true);
    expect(isPrefectSquare(64)).toBe(true);
    expect(isPrefectSquare(81)).toBe(true);
    expect(isPrefectSquare(100)).toBe(true);
  });
});
