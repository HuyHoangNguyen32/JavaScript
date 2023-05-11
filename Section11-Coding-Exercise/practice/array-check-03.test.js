// Kiểm tra có từ easy frontend trong mảng không
// Viết hàm hasEasyFrontend(wordList) để kiểm tra xem nội dung tất cả các từ có chứa easy và frontend không nhé
// Trẻ về true nếu :
// - Một phần tử có chứa cả 2 từ "easy" và "frontend"
// - Một phần tử chứa từ "easy" và một phần tử khác chứa "frontend"
// Ngược lại trả về false
import { hasEasyFrontend } from './array-check-03';
describe('hasEasyFrontend(wordList)', () => {
  it('should return false when wordList is empty or not array', () => {
    expect(hasEasyFrontend()).toBe(false);
    expect(hasEasyFrontend([])).toBe(false);
    expect(hasEasyFrontend({})).toBe(false);
  });

  it('should return false when wordList havent "easy frontend" or "easy" and "frontend"', () => {
    expect(hasEasyFrontend(['hello', 'easy', 'world'])).toBe(false);
  });

  it('should return true when wordList have "easy frontend" or "easy" and "frontend"', () => {
    expect(hasEasyFrontend(['hello', 'easy', 'world', 'frontend'])).toBe(true);
    expect(hasEasyFrontend(['hello', 'hoang', 'world', 'easy frontend'])).toBe(true);
  });
});
