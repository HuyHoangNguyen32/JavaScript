export function hasEasyFrontend(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) return false;

  let isEasy = false;
  let isFrontend = false;
  let isEasyFrontend = false;

  for (let i = 0; i < wordList.length; i++) {
    if (wordList[i] === 'easy') isEasy = true;
    if (wordList[i] === 'frontend') isFrontend = true;
    if (wordList[i] === 'easy frontend') isEasyFrontend = true;
  }

  let resultFlag = false;

  if (isEasy && isFrontend) resultFlag = true;
  if (isEasyFrontend) resultFlag = true;

  return resultFlag;
}

console.log(hasEasyFrontend(['hello', 'easy', 'world', 'frontend']));
