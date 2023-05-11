// Kiểm tra có số lẻ và chia hết cho 3 không
// Viết hàm hasOddNumberDivisibleBy3(numberList) để kiểm tra trong mảng numberList có chứa số lẻ nào chia hết cho 3 không
import { hasOddNumberDivisibleBy3 } from "./array-check-02";
describe('hasOddNumberDivisibleBy3(numberList)', () => {
  it('should return false if numberList is empty', () => {
    expect(hasOddNumberDivisibleBy3([])).toBe(false);
    expect(hasOddNumberDivisibleBy3({})).toBe(false);
    expect(hasOddNumberDivisibleBy3()).toBe(false);
  });

  it('should return false when numberList havent odd number divisivle by 3', () => {
    expect(hasOddNumberDivisibleBy3([1, 2, 5, 7, 8, 10, 12])).toBe(false);
  });

  it('should return true when numberList have odd number divisivle by 3', () => {
    expect(hasOddNumberDivisibleBy3([1, 2, 5, 7, 9, 15])).toBe(true);
  });
});
