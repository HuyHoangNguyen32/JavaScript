import { checkIfAllEvent1, checkIfAllEvent2 } from './check-exist';

describe('checkIfAllEvent1()', () => {
  test('should return false when not an array', () => {
    expect(checkIfAllEvent1(1)).toBe(false);
    expect(checkIfAllEvent1('')).toBe(false);
    expect(checkIfAllEvent1({})).toBe(false);
    expect(checkIfAllEvent1(null)).toBe(false);
    expect(checkIfAllEvent1(undefined)).toBe(false);
  });

  test('should return false when array is empty', () => {
    expect(checkIfAllEvent1([])).toBe(false);
  });

  test('should return false when array has no even number', () => {
    expect(checkIfAllEvent1([1, 3, 5, 7])).toBe(false);
  });

  test('should return false when array has some even numbers', () => {
    expect(checkIfAllEvent1([1, 2, 5, 6])).toBe(false);
  });

  test('should return true when array has all even numbers', () => {
    expect(checkIfAllEvent1([2, 4, 6, 8])).toBe(true);
  });
});

describe('checkIfAllEvent2()', () => {
  test('should return false when not an array', () => {
    expect(checkIfAllEvent2(1)).toBe(false);
    expect(checkIfAllEvent2('')).toBe(false);
    expect(checkIfAllEvent2({})).toBe(false);
    expect(checkIfAllEvent2(null)).toBe(false);
    expect(checkIfAllEvent2(undefined)).toBe(false);
  });

  test('should return false when array is empty', () => {
    expect(checkIfAllEvent2([])).toBe(false);
  });

  test('should return false when array has no even number', () => {
    expect(checkIfAllEvent2([1, 3, 5, 7])).toBe(false);
  });

  test('should return false when array has some even numbers', () => {
    expect(checkIfAllEvent2([1, 2, 5, 6])).toBe(false);
  });

  test('should return true when array has all even numbers', () => {
    expect(checkIfAllEvent2([2, 4, 6, 8])).toBe(true);
  });
});
