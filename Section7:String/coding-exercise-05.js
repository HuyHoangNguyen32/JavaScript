// Tìm và xoá các nguyên âm trong câu văn
// Viết hàm function removeVowel(str) để tìm và remove tất cả nguyên âm có trong câu văn đầu vào.
// Nguyên âm là các ký tự: u, e, o, a, i (uể oải :P)

// Ví dụ:
// removeVowel('') --> ''
// removeVowel('say hello') --> 'sy hll' vì a, e, o là nguyên âm nên đã bị xoá
// Giả định là mỗi nguyên âm trong str chỉ xuất hiện một lần.
// Trường hợp chuỗi sau khi bỏ các nguyên âm có dư khoảng trắng ở đầu hoặc cuối chuỗi, thì hãy bỏ luôn các khoảng trắng thừa này nhé.

// Lưu ý: không được sử dụng for, chỉ được dùng hàm replace()

function removeVowel(str) {
  if (str.length === 0) return '';

  const strNoU = str.replace('u', '');
  const strNoE = strNoU.replace('e', '');
  const strNoO = strNoE.replace('o', '');
  const strNoA = strNoO.replace('a', '');
  const strNoI = strNoA.replace('i', '');

  return strNoI.trim();
}

console.log(removeVowel(''));
console.log(removeVowel('say hello'));
