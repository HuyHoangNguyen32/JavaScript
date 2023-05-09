import {statisticWords} from './string-02'

describe('statisticsWords(str)', () => {
  it('should return empty object is case str is empty', () => {
    expect(statisticWords('')).toEqual({});
  });

  it("should return correct statistics when str doesn't  have redundant spaces", () => {
    expect(statisticWords('easy frontend is very easy')).toEqual({
      easy: 2,
      frontend: 1,
      is: 1,
      very: 1,
    });
  });

  it('should return correct statistics when str has redundant spaces', () => {
    expect(statisticWords('   easy    frontend   is   very easy   ')).toEqual({
      easy: 2,
      frontend: 1,
      is: 1,
      very: 1,
    });
  });
});
