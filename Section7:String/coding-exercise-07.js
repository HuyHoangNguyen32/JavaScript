// Convert số giây sang chuỗi hh:mm:ss
// Viết hàm formatTime(seconds) nhận vào là số giây seconds với (0 <= seconds <= 86400)

// Trả về là một chuỗi với định dạng hh:mm:ss trong đó:
// hh là số giờ
// mm là số phút
// ss là số giây
// hh, mm, ss luôn luôn hiển thị 2 chữ số kể cả nhỏ hơn 10.

// Ví dụ:
// formatTime(0) --> '00:00:00'
// formatTime(9) --> '00:00:09'
// formatTime(4256) --> '01:10:56'

// please try to use these constants in your code
const SECONDS_PER_HOUR = 3600;
const SECONDS_PER_MIN = 60;

function formatTime(seconds) {
  if (seconds < 0 || seconds > 86400) return '';

  let hh = Math.trunc(seconds / SECONDS_PER_HOUR);
  let mm = Math.trunc((seconds % SECONDS_PER_HOUR) / SECONDS_PER_MIN);
  let ss = seconds - (hh * SECONDS_PER_HOUR + mm * SECONDS_PER_MIN);

  if (ss < 10) ss = `0${ss}`;
  if (mm < 10) mm = `0${mm}`;
  if (hh < 10) hh = `0${hh}`;

  return `${hh}:${mm}:${ss}`;
}

console.log(formatTime(0));
console.log(formatTime(9));
console.log(formatTime(4256));
