// Đếm số lượng email có trong câu
// Viết hàm countEmails(str) để đếm số lượng email có trong str
// - Email là một chuỗi có chưa kí tự @ ở giữa và không phải ở cuối từ
// - Email có thể có một số domain như : .com, .vn, .com.vn.Domain xuất hiện ở cuối từ
// - Email có định dạng X@Y.Trong đó X có độ dài ít nhất 3 kí tự, Y có độ dài 3 kí tự không tính phần domain ở trên
// Trả về số lượng email tìm thấy từ chuỗi truyền vào

// countEmails('my email should be abc@super.com') --> 1
// countEmails('my email should be a@a.com') --> 0
import { countEmails } from "./string-04";

describe('countEmails(str)', () => {
  test('should return undefined when str is empty', () => {
    expect(countEmails('')).toBe(undefined);
  });

  test('should return number email in content', () => {
    expect(countEmails('my email a@super.com should be')).toBe(0);
    expect(countEmails('my email a@super.com should be abc@super.com and @ bla .com hoang@gmail.xyz')).toBe(1);
    expect(countEmails('my email should be easy@frontend.com or easy@frontend.com.vn or easy@frontend.vn he@edu.vn easy@frontend.xyz')).toBe(3);
  });

});
