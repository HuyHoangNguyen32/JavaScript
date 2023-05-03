// Format số giây luôn hiển thị 2 chữ số
// Viết hàm formatSeconds(seconds) nhận vào là số giây (0 <= seconds < 60) và trả về chuỗi luôn có 2 chữ số của số giây.

// Bài này áp dụng trong thực tế khi muốn show đồng hồ điện tử, để cho đẹp, mình đảm bảo luôn show 2 chữ số, dù số giờ phút giây chỉ có một chữ số.

// Ví dụ:
// formatSeconds(0) --> '00'
// formatSeconds(9) --> '09'
// formatSeconds(20) --> '20'

// Viết hàm theo 2 hướng tiếp cận khác nhau:
// formatSecondsV1(seconds) Sử dụng if...else
// formatSecondsV2(seconds) Sử dụng hàm slice()

// using if...else
function formatSecondsV1(seconds) {
  if (seconds < 0 || seconds > 60) return '';

  const secondsStr = seconds.toString();

  if (secondsStr.length === 1) return `0${secondsStr}`;

  return secondsStr;
}

console.log(formatSecondsV1(0));
console.log(formatSecondsV1(9));
console.log(formatSecondsV1(20));

// using slice()
function formatSecondsV2(seconds) {
  if (seconds < 0 || seconds > 60) return '';

  const secondsStr = seconds.toString();

  const newSeconds = `0${secondsStr}`;

  const newFormatSeconds = newSeconds.slice(-2);

  return newFormatSeconds;
}

console.log(formatSecondsV2(0));
console.log(formatSecondsV2(9));
console.log(formatSecondsV2(20));
