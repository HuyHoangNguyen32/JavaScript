// Hiển thị địa chỉ người dùng
// Viết hàm getDisplayedAddress(address) để ghép chuỗi từ các thuộc tính của object address thành một chuỗi address hoàn chỉnh
// - Chuỗi trả về có dạng "address.number address.street, address.ward, address.district, address.city"
// - Lưu ý object address không phải lúc nào cũng có đầy đủ các thông tin trên
import { getDisplayedAddress } from './string-06';

describe('getDisplayedAddress(address)', () => {
  test('should return "" when address is empty', () => {
    expect(getDisplayedAddress({})).toEqual('');
  });

  test('should return address with format "address.number address.street, address.ward, address.district, address.city" when address is not empty', () => {
    expect(
      getDisplayedAddress({
        number: 123,
        street: 'Nguyen Cong Tru',
        ward: 'Ward 11',
        district: 'Binh Thanh District',
        city: 'HCMC',
      })
    ).toEqual('123 Nguyen Cong Tru, Ward 11, Binh Thanh District, HCMC');

    expect(
      getDisplayedAddress({
        street: 'Nguyen Cong Tru',
        district: 'Binh Thanh District',
      })
    ).toBe('Nguyen Cong Tru, Binh Thanh District');

    expect(
      getDisplayedAddress({
        ward: 'Ward 11',
        district: 'Binh Thanh District',
        city: 'HCMC',
      })
    ).toBe('Ward 11, Binh Thanh District, HCMC');
  });
});
