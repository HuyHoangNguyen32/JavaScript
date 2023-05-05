// V1 : for i
function findLongestWordI(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) return undefined;

  let longestWord = wordList[0];

  for (let i = 0; i < wordList.length; i++) {
    let currentWord = wordList[i];
    if (currentWord.length > longestWord.length) longestWord = currentWord;
  }

  return longestWord;
}

// V2 : forEach
function findLongestWordEach(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) return undefined;

  let longestWord = wordList[0];

  wordList.forEach((x) => {
    if (x.length > longestWord.length) longestWord = x;
  });

  return longestWord;
}

// V2 : Reduce
function findLongestWordReduce(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) return undefined;

  return wordList.reduce((longestWord, currentWord) =>
    currentWord.length > longestWord.length ? currentWord : longestWord
  );

}
console.log(findLongestWordI(['hoang', 'nga', 'minh', 'kahfaahfle']));
console.log(findLongestWordEach(['hoang', 'nga', 'minh', 'kahfaahfle']));
console.log(findLongestWordReduce(['hoang', 'nga', 'minh', 'kahfaahfle']));
