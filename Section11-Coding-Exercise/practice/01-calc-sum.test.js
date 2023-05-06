// Bài 1: Tính S(n) = 1 + 2 + 3 + … + n

// function calculateSum(n) {}
// n <= 0 --> 0
// n > 0 --> sum
// n = 1 --> 1
// n = 2 --> 3
// n = 3 --> 6
import { calculateSum, calculateSum2 } from './01-calc-sum';

describe('S(n) = 1 + 2 + 3 + … + n', () => {
  test('should return 0 when n <=0', () => {
    expect(calculateSum(-1)).toBe(0);
    expect(calculateSum(0)).toBe(0);
  });
  test('should return 1 when n > 0', () => {
    expect(calculateSum(1)).toBe(1);
    expect(calculateSum(2)).toBe(3);
    expect(calculateSum(3)).toBe(6);
    expect(calculateSum(1)).toBe(1);
  });
});

describe('S(n) = 1 + 2 + 3 + … + n', () => {
  test('should return 0 when n <=0', () => {
    expect(calculateSum2(-1)).toBe(0);
    expect(calculateSum2(0)).toBe(0);
  });
  test('should return 1 when n > 0', () => {
    expect(calculateSum2(1)).toBe(1);
    expect(calculateSum2(2)).toBe(3);
    expect(calculateSum2(3)).toBe(6);
    expect(calculateSum2(10)).toBe(55);
  });
});
