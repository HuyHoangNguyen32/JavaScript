// Create a function 'truncate(text, maxLength)' that checks the length of the text and
// if it exceeds maxLength - replaces the end of str with the ellipsis character
// to make its length less equal to maxLength

// Eg : truncate('Easy Frontend', 4) --> 'Eas...'

// Ellipsis UTF-16 : '\u2026'

// length
// length <= maxLength --> show full
// length > maxLength --> truncate

function truncate(str, maxLength) {
  if (str.length <= maxLength) return str;

  const shortStr = str.slice(0, maxLength - 1);
  return `${shortStr}\u2026`;
}

console.log(truncate('Easy', 4)); // Easy
console.log(truncate('Easy Frontend', 4)); //Eas…
