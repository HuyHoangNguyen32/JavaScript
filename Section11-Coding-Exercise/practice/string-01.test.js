import { countWords } from './string-01';
describe('countWords(str)', () => {
  test('should return false when str is empty string', () => {
    expect(countWords('')).toEqual({});
  });

  test('should return a number', () => {
    expect(countWords('easy frontend javascript')).toEqual(3);
  });
});
