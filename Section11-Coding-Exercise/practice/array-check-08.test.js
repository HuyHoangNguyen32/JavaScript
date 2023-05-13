// Kiểm tra có sản phẩm nhỏ hơn giá cho trước và free ship không
// Viết hàm hasFreeShip(productList, price) để kiểm tra xem có product nào freeship và giá nhỏ hơn price không
import { hasFreeShip } from "./array-check-08";

describe('hasFreeShip(productList, price)', () => {
  test('should return false when productList is not array or empty', () => {
    expect(hasFreeShip([], 100)).toBe(false);
    expect(hasFreeShip({}, 100)).toBe(false);
    expect(hasFreeShip('test', 100)).toBe(false);
    expect(hasFreeShip(1, 100)).toBe(false);
  });

  test('should return false when price is not a number', () => {
    const productList = [
      {
        id: 1,
        name: 'iPhone',
        isFreeShip : true,
        price: 90
      },
      {
        id: 2,
        name: 'Samsung',
        isFreeShip : false,
        price: 70
      },
    ];
    expect(hasFreeShip(productList, '80')).toBe(false);
  });

  test('should return false when product is not freeship', () => {
    const productList = [
      {
        id: 1,
        name: 'iPhone',
        isFreeShip : false,
        price: 90
      },
      {
        id: 2,
        name: 'Samsung',
        isFreeShip : false,
        price: 70
      },
    ];
    expect(hasFreeShip(productList, 80)).toBe(false);
  });

  test('should return false when product is freeship but not < price', () => {
    const productList = [
      {
        id: 1,
        name: 'iPhone',
        isFreeShip : true,
        price: 85
      },
      {
        id: 2,
        name: 'Samsung',
        isFreeShip : false,
        price: 100
      },
    ];
    expect(hasFreeShip(productList, 80)).toBe(false);
  });

  test('should return true when product is freeship and < price', () => {
    const productList = [
      {
        id: 1,
        name: 'iPhone',
        isFreeShip : true,
        price: 90
      },
      {
        id: 2,
        name: 'Samsung',
        isFreeShip : true,
        price: 70
      },
    ];
    expect(hasFreeShip(productList, 80)).toBe(true);
  });
});
