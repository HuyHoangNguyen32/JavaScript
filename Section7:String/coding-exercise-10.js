// Truy tìm mật mã
// Viết hàm findSecret(code) để tìm ra chuỗi mật mã với quy tắc như sau.
// Bỏ đi các ký tự HOA trong code, chuỗi còn lại chính là mật mã cần tìm.
// Lưu ý: không dùng hàm replaceAll() và không dùng regular expression (regexp)

// Ví dụ:
// findSecret('SUPERCODE') --> ''
// findSecret('SUPERhelloCODE') --> 'hello'
// findSecret('eaABFHsyUEYSJfrontJSKJSHend') --> 'easyfrontend'

function findSecret(code) {
  let result = '';
  for (let i = 0; i < code.length; i++) {
    if (code[i] !== code[i].toUpperCase()) {
      code.replace(code[i], '');
      result += code[i];
    }
  }
  return result;
}

console.log(findSecret('SUPERCODE'));
console.log(findSecret('SUPERhelloCODE'));
console.log(findSecret('eaABFHsyUEYSJfrontJSKJSHend'));
