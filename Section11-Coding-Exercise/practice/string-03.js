export function statisticsCharacters(str) {
  if (str === '') return {};

  const statistics = {};

  str
    .split('')
    .filter((x) => x !== ' ')
    .forEach((character) => {
      // if (statistics[character]) {
      //   statistics[character] += 1;
      // } else {
      //   statistics[character] = 1;
      // }
      statistics[character] = statistics[character] !== undefined ? statistics[character] + 1 : 1
    });

  const spaces = str.split('').filter((x) => x === ' ').length;
  statistics['spaces'] = spaces;

  return statistics;
}

console.log(statisticsCharacters('javascript'));
console.log(statisticsCharacters('javascript typescript'));
