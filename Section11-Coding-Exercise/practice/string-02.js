// export function statisticWords(str) {
//   // if (str.length === 0) return {};
//   if (str === '') return {};

//   const statistics = {};

//   str = str
//     .split(' ')
//     .filter((x) => x !== '')
//     .forEach((word) => {
//       if (statistics[word]) {
//         statistics[word] += 1;
//       } else {
//         statistics[word] = 1;
//       }
//     });

//   return statistics;
// }

// C2
// export function statisticWords(str) {
//   // if (str.length === 0) return {};
//   if (str === '') return {};

//  return str
//     .split(' ')
//     .filter((x) => x !== '')
//     .reduce((statistics, word) => {
//       if (statistics[word]) {
//         statistics[word] += 1;
//       } else {
//         statistics[word] = 1;
//       }
//       return statistics;
//     }, {});
// }

// C3
export function statisticWords(str) {
  // if (str.length === 0) return {};
  if (str === '') return {};

 return str
    .split(' ')
    .filter((x) => x !== '')
    .reduce((statistics, word) => {
      statistics[word] = statistics[word] !== undefined ? statistics[word] + 1 : 1;
      return statistics;
    }, {});
}