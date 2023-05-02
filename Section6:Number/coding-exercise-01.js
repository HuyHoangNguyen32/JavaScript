/*
Viết hàm getTaxiCount(passengersCount) nhận vào là số hành khách và trả về là số taxi cần gọi để chở hết số khách đó.

Yêu cầu:
Khi số khách lớn hơn 4, ưu tiên dùng xe 7 chỗ
Nếu số khách nhỏ hơn hoặc bằng 4 thì dùng xe 4 chỗ
Trả về con số duy nhất là tổng của cả 2 loại xe taxi cần phải gọi.

Ví dụ:
getTaxiCount(3) --> 1 xe 4 chỗ
getTaxiCount(6) --> 1 xe 7 chỗ
getTaxiCount(10) --> 2 xe vì 1 xe 7 chỗ và 1 xe 4 chỗ
getTaxiCount(20) --> 3 xe 7 chỗ
*/
function getTaxiCount(passengersCount) {
  if (passengersCount <= 0) return -1;

  if (passengersCount <= 4) return '1 xe 4 chỗ';

  if (passengersCount > 4) {
    let cars7 = Math.trunc(passengersCount / 7);
    let cars4 = 0;
    let sumCars = cars7 + cars4;
    const otherCustomers = passengersCount % 7;

    if (otherCustomers <= 4) {
      cars4 = 1;
      sumCars = cars7 + cars4;
      return `${sumCars} xe vì ${cars7} xe 7 chỗ và ${cars4} xe 4 chỗ`;
    }

    if (otherCustomers > 4) cars7 += 1;
    return `${cars7} xe 7 chỗ`;
  }
}

console.log(getTaxiCount(3));
console.log(getTaxiCount(6));
console.log(getTaxiCount(10));
console.log(getTaxiCount(20));

// bài giải của bạn trên Udemy

function getTaxiCount(passengersCount) {
  // Check arguments

  if (typeof passengersCount !== 'number' || passengersCount <= 0) return -1;

  if (typeof passengersCount === 'number' && Number.isNaN(passengersCount)) return -1;

  // Processing

  if (passengersCount <= 4) return 1;

  if (passengersCount <= 7) return 1;

  let numberOfCars = 0;

  if (passengersCount % 7 === 0) numberOfCars = passengersCount / 7;

  if (passengersCount % 7 <= 4) numberOfCars = Math.floor(passengersCount / 7) + 1;

  if (passengersCount % 7 <= 6) numberOfCars = Math.ceil(passengersCount / 7);

  return numberOfCars;
}
